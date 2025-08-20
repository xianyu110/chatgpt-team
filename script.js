// 复制到剪贴板功能
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('链接已复制到剪贴板！');
    }).catch(function(err) {
        // 降级方案
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('链接已复制到剪贴板！');
    });
}

// 显示通知
function showNotification(message) {
    // 移除现有通知
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // 创建新通知
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    // 3秒后隐藏通知
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 平滑滚动到锚点
function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 页面加载动画
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .step, .contact-item, .pricing-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// 导航栏滚动效果
function initNavbarScroll() {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = '#fff';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
}

// 添加页面加载效果
function initPageLoad() {
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateX(-50px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'translateX(50px)';
    
    setTimeout(() => {
        heroContent.style.transition = 'all 0.8s ease';
        heroImage.style.transition = 'all 0.8s ease';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'translateX(0)';
    }, 200);
}

// 移动端菜单切换
function initMobileMenu() {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    
    // 在移动端添加菜单按钮
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.innerHTML = '☰';
        menuButton.className = 'mobile-menu-btn';
        menuButton.style.cssText = `
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #2c3e50;
            display: none;
        `;
        
        // 添加移动端菜单样式
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-menu-btn {
                    display: block !important;
                }
                .nav {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    right: 0;
                    background: #fff;
                    flex-direction: column;
                    padding: 1rem;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .nav.active {
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
        
        header.appendChild(menuButton);
        
        menuButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }
}

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    smoothScroll();
    initAnimations();
    initNavbarScroll();
    initPageLoad();
    initMobileMenu();
    
    // 添加键盘导航支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const nav = document.querySelector('.nav');
            nav.classList.remove('active');
        }
    });
});

// 性能优化：防抖滚动事件
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动性能
const optimizedScrollHandler = debounce(() => {
    // 滚动相关的性能敏感操作
}, 16);

window.addEventListener('scroll', optimizedScrollHandler); 