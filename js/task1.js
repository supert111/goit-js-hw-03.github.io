const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skidiving';
user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.table(`${key}: ${user[key]}`);
};
