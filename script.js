const buttons=[...document.querySelectorAll('.filters button')];
const projects=[...document.querySelectorAll('.project')];
buttons.forEach(btn=>btn.addEventListener('click',()=>{
  buttons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const filter=btn.dataset.filter;
  projects.forEach(p=>{
    p.classList.toggle('hide',filter!=='all' && !p.dataset.tags.split(' ').includes(filter));
  });
}));
