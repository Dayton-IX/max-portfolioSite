import React from 'react';

function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });
        observer.observe(domRef.current);
        // eslint-disable-next-line
        return () => observer.unobserve(domRef.current);
    }, []);

    let fadeClass = 'fade-in-section'

    switch(props.type) {
        case 'right':
            fadeClass = 'fade-in-right';
            break;
        case 'left':
            fadeClass = 'fade-in-left';
            break;
        case 'top':
            fadeClass = 'fade-in-top';
            break;
        default:
            fadeClass = 'fade-in-section';
    }
    
    return (
        <div
            className={`${fadeClass} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}
  

export default FadeInSection;