//Menu de naveegacion mobil
let btnOpen = document.getElementById('btnOpen');
let navMobile = document.getElementById('navMobile');
let contentItem = document.getElementById('contentMobile');

btnOpen.addEventListener('click', () => {
    navMobile.classList.add('active');
    setTimeout(() => {
        contentItem.classList.add('active');
    }, 300);
});

navMobile.addEventListener('mouseup', () => {
    contentItem.classList.remove('active');
    setTimeout(() => {
        navMobile.classList.remove('active');
    }, 400);
});

const contentCard = new Muuri('.main__section', {
    layout: {
        rounding: false
    }
});

window.addEventListener('load', () => {
    contentCard.refreshItems().layout();

    document.getElementById('mainSection').classList.add('card__load')

    const category = document.querySelectorAll('#category ul li a');
    //agregar active en la lista de categorias
    category.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            category.forEach((collbak) => collbak.classList.remove('active'))
            item.classList.add('active');
            //Filtro de elementos
            const options = e.target.innerHTML.toLowerCase();
            options === 'todos' ? contentCard.filter('[data-category]') : contentCard.filter(`[data-category="${options}"]`);
        });
    });

    //FORMULARIO DE BUSQUEDA
    let formSearch = document.getElementById('formSearch');
    let iconSearch = document.getElementById('iconSearch');
    let inputSearch = document.getElementById('inputSearch');

    formSearch.addEventListener('click', () => {
        formSearch.classList.toggle('active');
    });

    inputSearch.addEventListener('keyup', () => {
        iconSearch.classList.add('active');
    });

    inputSearch.addEventListener('blur', () => {
        iconSearch.classList.remove('active');
        formSearch.classList.remove('active');
    })

    inputSearch.addEventListener('input', (e) => {
        const search = e.target.value;
        contentCard.filter((item) => item.getElement().dataset.category.includes(search));
    });

    // bentana contacto
    let contactContainer = document.getElementById('contact');
    let btnCloseContact = document.getElementById('btnClose');
    let btnOpenContact = document.getElementById('btnOpenC');

    btnOpenContact.addEventListener('click', e => {
        e.preventDefault();
        contactContainer.classList.add('active');
    });
    btnCloseContact.addEventListener('click', e => {
        e.preventDefault();
        contactContainer.classList.remove('active');
    });





    // window.onscroll = () => {
    //     if (document.documentElement.scrollTop > 100) {
    //         buttonTop.classList.add('show')
    //         btnContent.classList.add('active')
    //     } else {
    //         buttonTop.classList.remove('show')
    //         btnContent.classList.remove('active')
    //     }
    //     buttonTop.addEventListener('click', () => {
    //         window.scrollTo({
    //             top: 0,
    //             behavior: 'smooth'
    //         })
    //     })
    // }
});