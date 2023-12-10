function menuSection() {
    return {

        conteiner: document.querySelector('.conteiner'),

        start() {
            this.navBar()
            this.nav()
        },

        nav() {
            bar = document.querySelector('.nav').querySelectorAll('li')

            bar.forEach(e => {
                e.addEventListener('click', function() {
                    bar.forEach(nav=>nav.classList.remove('active'))

                    this.classList.add('active')
                })
            })
        },

        navBar() {
            document.addEventListener('click', e => {
                const nav = e.target
                
                if(nav.id === 'thawxn') {
                    this.thawxn()
                }

                if(nav.id === 'about') {
                    this.about()
                }

                if(nav.id === 'projects') {
                    this.projects()
                }

                if(nav.id === 'contact') {
                    this.contact()
                }

                if(nav.id === 'burguer') {
                    this.burguer()
                }
            })
        },

        thawxn() {
            const thawxn = document.querySelector('.conteiner-zero')

            const about = document.querySelector('.conteiner-one')
            const projects = document.querySelector('.conteiner-two')
            const contact = document.querySelector('.conteiner-three')
            
            thawxn.style.display = 'block'
            about.style.display = 'none'
            projects.style.display = 'none'
            contact.style.display = 'none'

        },

        about() {
            const about = document.querySelector('.conteiner-one')
            const navPaginas = document.querySelector('.nav-paginas');

            const thawxn = document.querySelector('.conteiner-zero')
            const projects = document.querySelector('.conteiner-two')
            const contact = document.querySelector('.conteiner-three')
            
            about.style.display = 'block'
            thawxn.style.display = 'none'
            projects.style.display = 'none'
            contact.style.display = 'none'

            if(navPaginas.style.display === 'block') {
                navPaginas.style.display = 'none'
            }
        },

        projects() {
            const projects = document.querySelector('.conteiner-two')
            const navPaginas = document.querySelector('.nav-paginas');

            const thawxn = document.querySelector('.conteiner-zero')
            const about = document.querySelector('.conteiner-one')
            const contact = document.querySelector('.conteiner-three')
            
            projects.style.display = 'block'
            thawxn.style.display = 'none'
            about.style.display = 'none'
            contact.style.display = 'none'

            if(navPaginas.style.display === 'block') {
                navPaginas.style.display = 'none'
            }
        },
        
        contact() {
            const contact = document.querySelector('.conteiner-three')
            const navPaginas = document.querySelector('.nav-paginas');
            
            const thawxn = document.querySelector('.conteiner-zero')
            const about = document.querySelector('.conteiner-one')
            const projects = document.querySelector('.conteiner-two')
            
            contact.style.display = 'block'
            thawxn.style.display = 'none'
            about.style.display = 'none'
            projects.style.display = 'none'

            if(navPaginas.style.display === 'block') {
                navPaginas.style.display = 'none'
            }
        },

        burguer() {
            const navPaginas = document.querySelector('.nav-paginas');
            

            if(navPaginas.style.display === 'block') {
                navPaginas.style.display = 'none'
            } else {
                navPaginas.style.display = 'block'
            }
        },

    }
}

const menu = menuSection()
menu.start()
