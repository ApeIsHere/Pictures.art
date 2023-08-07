const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          items = menu.querySelectorAll('li'),
          wrapper = document.querySelector('.portfolio-wrapper'),
          markAll = wrapper.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    const typeFilter = (markedClass, markedData) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');

            if (mark.classList.contains(markedClass)) {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            } else if (markedData) {
                no.style.display = 'block'
                no.classList.add('animated', 'fadeIn');
            }
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');
    };

    console.log(markAll);

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == "LI") {
            items.forEach(btn => btn.classList.remove('active'));
            target.classList.add('active');
            
            let selecteClass = target.classList[0];

            let noElement;
            if (target.hasAttribute('data-no')) {
                noElement = 1;
            };

            console.log(Boolean(noElement));
            console.log(target.classList[0]);

            typeFilter(selecteClass, noElement);
        }
    });
};

export default filter;