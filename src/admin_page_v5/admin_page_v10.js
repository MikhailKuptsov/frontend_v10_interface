//Admin_page_v10
import React, { useState } from 'react';
import { Container, Card, Button, Form, Dropdown } from 'react-bootstrap';

// Данные из JSON (вместо реального файла)
const jsonData = [
  {
    "username": "Fedor",
    "surname": "Купров",
    "name": "Фёдор",
    "patronymic": "Фёдорович",
    "job_title":"",
    "telegram":"",
    "email": "fedor@mail.ru",
    "password": "epix158",
    "role": "Admin"
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
  },
  {
    "username": "Maksim",
    "firstname": "Alexandrovich",
    "name": "Максим",
    "lastname": "Maksimov",
    "email": "maksim@example.com",
    "password": "pass123",
    "role": "пользователь"
  },
  {
    "username": "Sergey",
    "firstname": "Vladimirovich",
    "name": "Сергей",
    "lastname": "Sergeev",
    "email": "sergey@example.com",
    "password": "qwerty",
    "role": "модератор"
  }
];

export default function Admin_page_v10(){
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
    role: 'аудитор'
  });
  const [selectedToDelete, setSelectedToDelete] = useState([]);
  const [filterRole, setFilterRole] = useState('все');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered Users by Role
  const filteredUsersByRole = filterRole === 'все'
    ? users
    : users.filter(user => user.role === filterRole);

  // Filtered Users by Search Term and Role
  const filteredUsers = filteredUsersByRole.filter(user => {
    const searchTerms = searchTerm.toLowerCase().split(' ');
    return searchTerms.every(term =>
      Object.values(user).some(value =>
        typeof value === 'string' && value.toLowerCase().includes(term)
      )
    );
  });

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
      role: 'аудитор'
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
    // Create JSON of usernames to delete
    const usersToDelete = selectedToDelete.map(username => ({ username }));
    console.log("Удаленные пользователи (JSON):", JSON.stringify(usersToDelete));

    // Update the state
    const updatedUsers = users.filter(user => !selectedToDelete.includes(user.username));
    setUsers(updatedUsers);
    setSelectedToDelete([]);
  };

  const handleFilterChange = (role) => {
    setFilterRole(role);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //отображение формы создание нового пользователя
  if (newUserMode) {
    return (
      <Container>
        <h2>Создать нового пользователя</h2>
        <Form>
          {/* ... Form fields ... */}
          <Form.Group controlId="formUsername">
            <Form.Label>Введите логин:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={newUserData.username}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formFirstname">
            <Form.Label>Введите фамилию</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={newUserData.firstname}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Введите имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={newUserData.name}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formLastname">
            <Form.Label>Введите отчество:</Form.Label>
            <Form.Control
              type="text"
              name="lastname"
              value={newUserData.lastname}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={newUserData.email}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Пароль:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={newUserData.password}
              onChange={handleNewUserInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formRole">
            <Form.Label>Роль пользователя:</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={newUserData.role}
              onChange={handleNewUserInputChange}
            >
              <option>админ</option>
              <option>аудитор</option>
              <option>модератор общий</option>
              <option>модератор назначения аудита</option>
              <option>модератор просмотра результатов</option>
              <option>сотрудник РПС</option>
            </Form.Control>
          </Form.Group>
          <div style={{display:"flex", marginTop:"5px"}}>
            <div style={{margin:"10px"}}>
            <Button variant="outline-dark" onClick={handleBackToList} size='lg'>Назад</Button>
            </div>
            <div style={{margin:"10px"}}>
            <Button variant="outline-success" onClick={handleSaveNewUser} size='lg'>Сохранить</Button>
            </div>
          </div>
        </Form>
      </Container>
    );
  }

  //редактирование данных пользователей
  if (selectedUser) {
    return (
      <Container >
        <h2>Информация о пользователе</h2>
        <Form>
          {/* ... Form fields ... */}
          <Form.Group controlId="formUsername">
            <Form.Label>Логин:</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={selectedUser.username}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formFirstname">
            <Form.Label>Фамилия</Form.Label>
            <Form.Control
              type="text"
              name="firstname"
              value={selectedUser.firstname}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Имя</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </Form.Group>
          <Form.Group controlId="formLastname">
            <Form.Label>Отчество</Form.Label>
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
            <Form.Label>Роль пользователя:</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={selectedUser.role}
              disabled={!isEditing}
              onChange={handleInputChange}
            >
              <option>админ</option>
              <option>аудитор</option>
              <option>модератор общий</option>
              <option>модератор назначения аудита</option>
              <option>модератор просмотра результатов</option>
              <option>сотрудник РПС</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <div style={{display:"flex", marginTop:"5px"}}>
          <Button style={{margin:"10px"}} variant="outline-dark" size='lg' onClick={handleBackToList}>Назад</Button>
          {!isEditing ? (
            <Button style={{margin:"10px"}} variant="warning" size='lg' onClick={handleEditClick}>Редактировать</Button>
          ) : (
            <Button style={{margin:"10px"}} variant="outline-success" size='lg' onClick={handleSaveUser}>Сохранить изменения</Button>
          )}
        </div>
      </Container>
    );
  }

  //страница с карточками пользователей
  return (
    <Container>
      <div style={{display:"flex", flexWrap:"wrap"}}>
      <Form.Control
        type="text"
        placeholder="Поиск по имени, фамилии, логину..."
        style={{minWidth:"150px",maxWidth:"500px", margin:"5px"}}
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Dropdown style={{margin:"5px"}}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Фильтр по ролям: {filterRole}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('все')}>Все</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('админ')}>Админ</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('аудитор')}>Аудитор</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('модератор общий')}>Модератор общий</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('модератор назначения аудита')}>Модератор назначения аудита</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('модератор просмотра результатов')}>Модератор просмотра результатов</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('сотрудник')}>сотрудник РПС</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>

      <Button variant="success" onClick={handleCreateUserClick} style={{margin:"5px"}}>Создать пользователя</Button>
      {selectedToDelete.length > 0 && (
        <Button variant="danger" onClick={handleDeleteSelected}>Удалить выбранные</Button>
      )}
      <div style={{padding:"10px"}}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {filteredUsers.map(user => (
            <Card key={user.username} style={{ width: '300px', height: '200px', border:"1px solid #1c3572"}}>
              <Card.Body>
                <Card.Title>{user.username}</Card.Title>
                <Card.Text>
                  {user.firstname} {user.name} {user.lastname}
                </Card.Text>
                <Button variant="outline-dark" onClick={() => handleSelectUser(user)}>Выбрать</Button>{' '}
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
          ))}
        </div>
      </div>
    </Container>
  );
}

