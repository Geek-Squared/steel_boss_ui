<script>
    let menuItems = [{
            name: 'Home',
            url: '/'
        },
        {
            name: 'Our Products',
            url: '/products'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        },
    ];
    let showMenu = false;
    
    // Function to handle scroll and hide the logo
    window.onscroll = function() {
        let navbar = document.querySelector('.navbar');
        let logo = document.querySelector('.logo');
        if (window.scrollY > 50) {
            logo.style.display = 'none';
            navbar.classList.add('scrolled');
        } else {
            logo.style.display = 'flex';
            navbar.classList.remove('scrolled');
        }
    };
    </script>
    
    <style lang="scss">
    .navbar {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;
        background-color: white;
        position: sticky;
        top: 0;
        z-index: 100;
        transition: padding 0.3s;
    }
    
    .navbar.scrolled {
        padding: 10px;
    }
    
    .logo img {
        width: 300px;
        height: auto;
        margin-bottom: -15px;
    }
    
    .menu {
        display: flex;
        gap: 30px;
        justify-content: center;
        width: 100%;
    }
    
    a {
        text-decoration: none;
        font-size: 23px;
        font-weight: 500;
        color: #333;
    }
    
    .menu-button-container {
        display: flex;
        align-items: center;
        gap: 80px;
    }
    
    .quote-button {
        color: white;
        width: 200px;
        border: none;
        padding: 10px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border-radius: 4px;
        background-color: #0001ff;
    }
    
    .menu-icon {
        display: none;
        cursor: pointer;
        font-size: 30px;
    }
    
    .close-menu {
        display: none;
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 2em;
    }
    
    @media (max-width: 768px) {
        .navbar {
            height: auto;
        }
    
        .menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            width: 100%;
            flex-direction: column;
            display: none;
        }
    
        .menu-icon {
            display: block;
        }
    
        .menu-button-container.active .menu,
        .menu-button-container.active .close-menu {
            display: flex;
        }
    
        .quote-button {
            display: none;
        }
    
        .close-menu {
            background-color: none;
        }
    }
    </style>
    
    <div class="navbar">
        <div class="logo">
            <img src="/logo.jpeg" alt="Logo">
        </div>
        <div class="menu-button-container" class:active={showMenu}>
            <button class="close-menu" on:click={() => showMenu = false}>X</button>
            <div class="menu">
                {#each menuItems as item (item.name)}
                <a href={item.url}>{item.name}</a>
                {/each}
            </div>
            <a href="/contact">
                <button class="quote-button">GET A QUOTE</button>
            </a>
        </div>
        {#if !showMenu}
        <div class="menu-icon" on:click={() => showMenu = !showMenu}>☰</div>
        {/if}
    </div>
    