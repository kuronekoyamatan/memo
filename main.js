'use-strict';
{
  const save = document.getElementById('save');
  const remove = document.getElementById('remove');
  const text = document.getElementById('text');
  const massage = document.getElementById('massage');

  if (localStorage.getItem('memo') === null) {
    text.value = '';
  } else {
    text.value = localStorage.getItem('memo');
  }

  save.addEventListener('click', () => {
    massage.classList.add('appear');
    setTimeout(() => {
      massage.classList.remove('appear');
    }, 1000);

    localStorage.setItem('memo', text.value);
  });

  remove.addEventListener('click', () => {
    if (confirm('削除しちゃうよ？') === true) {
      text.value="";
      localStorage.removeItem("memo");
    }
  });
}
