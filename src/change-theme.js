export default function changeTheme;
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  function changeTheme() {
    console.log('checked');
  }
  
  refs.input.addEventListener('change', changeTheme());