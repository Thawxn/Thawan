function menuSection() {
    return {

        conteiner: document.querySelector('.conteiner'),

        start() {
            this.navBar()
            this.nav()
        },

        nav() {
            bar = document.querySelector('.nav-bar').querySelectorAll('li')

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
                
                if(nav.id === 'about') {
                    this.about()
                }

                if(nav.id === 'projects') {
                    this.projects()
                }

                if(nav.id === 'certificate') {
                    this.certificate()
                }
            })
        },

        about() {
            const about = document.querySelector('.conteiner-one')

            const projects = document.querySelector('.conteiner-two')
            const certificate = document.querySelector('.conteiner-three')
            
            about.style.display = 'block'
            projects.style.display = 'none'
            certificate.style.display = 'none'

        },

        projects() {
            const projects = document.querySelector('.conteiner-two')

            const about = document.querySelector('.conteiner-one')
            const certificate = document.querySelector('.conteiner-three')
            
            projects.style.display = 'block'
            about.style.display = 'none'
            certificate.style.display = 'none'
        },
        
        certificate() {
            const certificate = document.querySelector('.conteiner-three')
            
            const about = document.querySelector('.conteiner-one')
            const projects = document.querySelector('.conteiner-two')
            
            certificate.style.display = 'block'
            about.style.display = 'none'
            projects.style.display = 'none'
        },

        
    }
}

const menu = menuSection()
menu.start()
