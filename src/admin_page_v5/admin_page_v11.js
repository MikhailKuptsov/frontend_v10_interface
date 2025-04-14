//Admin_page_v11
import React, { useState } from 'react';
import { Container, Card, Button, Form, Dropdown } from 'react-bootstrap';

// Данные из JSON (вместо реального файла)
const jsonData = [
  {
    "username": "Fedor",
    "firstname": "Купров",
    "name": "Фёдор",
    "lastname": "Фёдорович",
    "email": "fedor@mail.ru",
    "password": "epix158",
    "role": "admin"
  },
  {
    "username": "AnYa",
    "firstname": "Родионовна",
    "name": "Аня",
    "lastname": "Николаевна",
    "email": "anya@gmail.ru",
    "password": "unix90",
    "role": "user"
  },
  {
    "username": "KosTya",
    "firstname": "Никуев",
    "name": "Костя",
    "lastname": "Родионович",
    "email": "kotix@gmail.ru",
    "password": "09010",
    "role": "moderator"
  },
  {
    "username": "Petr",
    "firstname": "Petrovich",
    "name": "Петр",
    "lastname": "Petrov",
    "email": "petr@example.com",
    "password": "secure123",
    "role": "user"
  },
  {
    "username": "Elena",
    "firstname": "Ivanovna",
    "name": "Елена",
    "lastname": "Ivanova",
    "email": "elena@example.com",
    "password": "pass456",
    "role": "moderator"
  },
  {
    "username": "Igor",
    "firstname": "Sergeevich",
    "name": "Игорь",
    "lastname": "Sergeev",
    "email": "igor@example.com",
    "password": "strong789",
    "role": "admin"
  },
  {
    "username": "Maksim",
    "firstname": "Alexandrovich",
    "name": "Максим",
    "lastname": "Maksimov",
    "email": "maksim@example.com",
    "password": "pass123",
    "role": "user"
  },
  {
    "username": "Sergey",
    "firstname": "Vladimirovich",
    "name": "Сергей",
    "lastname": "Sergeev",
    "email": "sergey@example.com",
    "password": "qwerty",
    "role": "moderator"
  }
];

function Admin_page_v11() {
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
    role: 'user' // Default role should match the internal value
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
      role: 'user'
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
      const roleMapping = {
        'admin': 'admin',
        'moderator': 'moderator',
        'user': 'user',
        'все': 'все',
    };
    setFilterRole(roleMapping[role] || 'все');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Mapping display roles to internal roles
  const displayToInternalRole = {
    'админ': 'admin',
    'пользователь': 'user',
    'модератор': 'moderator'
  };

    // Mapping internal roles to display roles
    const internalToDisplayRole = {
        'admin': 'админ',
        'user': 'пользователь',
        'moderator': 'модератор'
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
          {/* ... Other form fields ... */}
          <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={newUserData.role}
              onChange={(e) => {
                const displayRole = e.target.value;
                const internalRole = displayToInternalRole[displayRole] || 'user'; // Default to 'user'
                setNewUserData({...newUserData, role: internalRole });
              }}
            >
              <option value="пользователь">пользователь</option>
              <option value="модератор">модератор</option>
              <option value="админ">админ</option>
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
                />
            </Form.Group>
            <Form.Group controlId="formFirstname">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                    type="text"
                    name="firstname"
                    value={selectedUser.firstname}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={selectedUser.name}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                    type="text"
                    name="lastname"
                    value={selectedUser.lastname}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={selectedUser.email}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={selectedUser.password}
                    onChange={handleInputChange}
                />
            </Form.Group>
          {/* ... Other form fields ... */}
           <Form.Group controlId="formRole">
            <Form.Label>Role</Form.Label>
            <Form.Control
              as="select"
              name="role"
              value={selectedUser.role}
              onChange={(e) => {
                const displayRole = e.target.value;
                const internalRole = displayToInternalRole[displayRole] || 'user';
                setSelectedUser({...selectedUser, role: internalRole });
              }}
              disabled={!isEditing}
            >
              <option value="пользователь">пользователь</option>
              <option value="модератор">модератор</option>
              <option value="админ">админ</option>
            </Form.Control>
          </Form.Group>

          <Button variant="secondary" onClick={handleBackToList}>Назад</Button>{' '}
          {!isEditing ? (
            <Button variant="primary" onClick={handleEditClick}>Редактировать</Button>
          ) : (
            <Button variant="success" onClick={handleSaveUser}>Сохранить изменения</Button>
          )}
        </Form>
      </Container>
    );
  }

  return (
    <Container>
      <Form.Control
        type="text"
        placeholder="Поиск по имени, фамилии, логину..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Фильтр по ролям: {internalToDisplayRole[filterRole] || 'Все'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleFilterChange('все')}>Все</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('admin')}>Админ</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('moderator')}>Модератор</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilterChange('user')}>Пользователь</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="success" onClick={handleCreateUserClick}>Создать пользователя</Button>
      {selectedToDelete.length > 0 && (
        <Button variant="danger" onClick={handleDeleteSelected}>Удалить выбранные</Button>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {filteredUsers.map(user => (
          <Card key={user.username} style={{ width: '300px', height: 'auto' }}>
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
        ))}
      </div>
    </Container>
  );
}

export default Admin_page_v11;