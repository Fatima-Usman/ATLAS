function showSubjects() {
  document.getElementById('home').style.display = 'none';
  document.getElementById('islamiyat-page').style.display = 'none';
  document.getElementById('subjects').style.display = 'flex';
}

function showHome() {
  document.getElementById('subjects').style.display = 'none';
  document.getElementById('islamiyat-page').style.display = 'none';
  document.getElementById('home').style.display = 'flex';
  document.getElementById('subjects-dropdown').style.display = 'none';
}

function showIslamiyat() {
  document.getElementById('subjects').style.display = 'none';
  document.getElementById('islamiyat-page').style.display = 'flex';
}

function showSubjectsFromIslamiyat() {
  document.getElementById('islamiyat-page').style.display = 'none';
  document.getElementById('subjects').style.display = 'flex';
}

function toggleDropdown() {
  const dropdown = document.getElementById('subjects-dropdown');
  if (dropdown.style.display === 'flex') {
    dropdown.style.display = 'none';
  } else {
    dropdown.style.display = 'flex';
  }
}