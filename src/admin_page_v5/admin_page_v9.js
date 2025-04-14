import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Form, Dropdown } from 'react-bootstrap';

// Данные из JSON (вместо реального файла)
const jsonData = [
  {
    "username": "Fedor",
    "firstname": "Купров",
    "name": "Фёдор",
    "lastname": "Фёдорович",
    "email": "fedor@mail.ru",
    "password": "epix158",
    "role": "админ"
  },
  {
    "username": "AnYa",
    "firstname": "Родионовна",
    "name": "Аня",
    "lastname": "Николаевна",
    "email": "anya@gmail.ru",
    "password": "unix90",
    "role": "пользователь"
  },
  {
    "username": "KosTya",
    "firstname": "Никуев",
    "name": "Костя",
    "lastname": "Родионович",
    "email": "kotix@gmail.ru",
    "password": "09010",
    "role": "модератор"
  },
  {
    "username": "Petr",
    "firstname": "Petrovich",
    "name": "Петр",
    "lastname": "Petrov",
    "email": "petr@example.com",
    "password": "secure123",
    "role": "пользователь"
  },
  {
    "username": "Elena",
    "firstname": "Ivanovna",
    "name": "Елена",
    "lastname": "Ivanova",
    "email": "elena@example.com",
    "password": "pass456",
    "role": "модератор"
  },
  {
    "username": "Igor",
    "firstname": "Sergeevich",
    "name": "Игорь",
    "lastname": "Sergeev",
    "email": "igor@example.com",
    "password": "strong789",
    "role": "админ"
  }
];

export default function Admin_page_v9(){
  const [users, setUsers] = useState(jsonData);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserMode, setNewUserMode] = useState(false);
  const [newUserData, setNewUserData] = useState({
    username: '',
    firstname: '',
    name: '',
    lastname: '',
    email: '',
    password: '',
    role: 'пользователь'
  });
  const [selectedToDelete, setSelectedToDelete] = useState([]);
  const [filterRole, setFilterRole] = useState('все');  // По умолчанию фильтр "все"

  // Фильтрованные пользователи
  const filteredUsers = filterRole === 'все'
    ? users
    : users.filter(user => user.role === filterRole);

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    setIsEditing(false);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
    setNewUserMode(false);
    setIsEditing(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser(prevUser => ({ ...prevUser, [name]: value }));
  };

  const handleNewUserInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSaveUser = () => {
    console.log("Сохраненные данные пользователя:", selectedUser);
    setIsEditing(false);
  };

  const handleCreateUserClick = () => {
    setNewUserMode(true);
    setNewUserData({
      username: '',
      firstname: '',
      name: '',
      lastname: '',
      email: '',
      password: '',
      role: 'пользователь'
    });
  };

  const handleSaveNewUser = () => {
    console.log("Данные нового пользователя:", newUserData);
    setUsers([...users, newUserData]);
    setNewUserMode(false);
  };

  const handleCheckboxChange = (e, username) => {
    if (e.target.checked) {
      setSelectedToDelete([...selectedToDelete, username]);
    } else {
      setSelectedToDelete(selectedToDelete.filter(u => u !== username));
    }
  };

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter(user => !selectedToDelete.includes(user.username));
    setUsers(updatedUsers);
    setSelectedToDelete([]);
  };

  const handleFilterChange = (role) => {
    setFilterRole(role);
  };

  if (newUserMode) {
    return (
      <Container>
        <h2>Создать нового пользователя</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={newUserData.username}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formFirstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={newUserData.firstname}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newUserData.name}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={newUserData.lastname}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={newUserData.email}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={newUserData.password}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={newUserData.role}
              onChange={handleNewUserInputChange}
            >
              <option>пользователь</option>
              <option>модератор</option>
              <option>админ</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" onClick={handleSaveNewUser}>Сохранить</Button>{' '}
          <Button variant="secondary" onClick={handleBackToList}>Назад</Button>
        </Form>
      </Container>
    );
  }

  if (selectedUser) {
    return (
      <Container>
        <h2>Информация о пользователе</h2>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={selectedUser.username}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formFirstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={selectedUser.firstname}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={selectedUser.lastname}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={selectedUser.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              type="text"
              name="role"
              value={selectedUser.role}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
        </Form>
        <Button variant="secondary" onClick={handleBackToList}>Назад</Button>{' '}
        {!isEditing ? (
          <Button variant="primary" onClick={handleEditClick}>Редактировать</Button>
        ) : (
          <Button variant="success" onClick={handleSaveUser}>Сохранить изменения</Button>
        )}
      </Container>
    );
  }

  return (
    <Container>
        <Dropdown style={{margin:"5px"}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Фильтр по ролям: {filterRole}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleFilterChange('все')}>Все</Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange('админ')}>Админ</Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange('модератор')}>Модератор</Dropdown.Item>
                <Dropdown.Item onClick={() => handleFilterChange('пользователь')}>Пользователь</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

      <Button style={{margin:"5px"}} variant="success" onClick={handleCreateUserClick}>Создать пользователя</Button>

      {selectedToDelete.length > 0 && (
        <Button variant="danger" onClick={handleDeleteSelected}>Удалить выбранные</Button>
      )}

      <Row >
        {filteredUsers.map(user => (
          <Col md={3} key={user.username} style={{marginTop:"5px", marginBottom:"5px"}}>
            <Card>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  {user.firstname} {user.name} {user.lastname}
                </Card.Text>
                <Button variant="primary" onClick={() => handleSelectUser(user)}>Выбрать</Button>{' '}
                <Form.Check
                  inline
                  label="Выбрать для удаления"
                  type="checkbox"
                  id={`checkbox-${user.username}`}
                  checked={selectedToDelete.includes(user.username)}
                  onChange={(e) => handleCheckboxChange(e, user.username)}
                />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

