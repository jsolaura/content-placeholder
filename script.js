const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_text = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
    header.innerHTML = `
        <img src="https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="">
    `;
    title.innerHTML = 'Lorem ipsum dolor';
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quis nemo aut dolore labore provident eum tempora earum temporibus molestias, odio quasi aliquam iste totam nesciunt cum tempore praesentium id!';
                    
    profileImg.innerHTML = `<img src="http://randomuser.me/api/portraits/women/40.jpg" alt="">`;
    name.innerHTML = 'Laura Tom';
    date.innerHTML = 'Oct 08, 2020';

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
    animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'));
}

// getData()