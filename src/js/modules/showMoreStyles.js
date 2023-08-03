import { getResourse } from "../services/requests";


//------------------------- Easy way  (show - hide)


// const showMoreStyles = (trigger, styles) => {
//     const cards = document.querySelectorAll(styles),
//           btn = document.querySelector(trigger);
    
    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');
    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    //     });
    //     btn.remove();    
    // })


    //------------------------- Hard Way (Pulling from JSON server)


const showMoreStyles = (trigger, wrapper) => {
        const btn = document.querySelector(trigger);
              
    btn.addEventListener('click', function() {
        getResourse('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => appendCatchError());

        this.remove();
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            
            card.innerHTML = `
            <div class="styles-block">
                <img src=${src} alt="style">
	 			<h4>${title}</h4>
				<a href="#">${link}</a>
	 		</div>
            `;

            document.querySelector(wrapper).appendChild(card);
        });
    };

    function appendCatchError() {
        let error = document.createElement('div');
       
        error.classList.add('animated', 'fadeInUp');
        error.style.cssText = 'text-align: center';


        error.textContent = "something went wrong with the pulling request...";

        document.querySelector(wrapper).appendChild(error);
    };
};

export default showMoreStyles;