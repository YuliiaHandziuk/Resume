//drawing line and to get visible block

const experienceBlock = {
    id: 'work-experience-icon',
    condition: null,
    
    line: {
        id: 'experience-line',
    },
    descroption: {
        id: 'work-experience-item'
    },
    draw: function() {
        console.log('exprerience');
    }
};



function initLineAndBlock(iconId,lineId,itemId) {
    let icon = document.getElementById(iconId);
    let line = document.getElementById(lineId);
    line.style.display = 'block';
    let block = document.getElementById(itemId);
    block.style.display = 'inline-block';
}

// to stop animation for main svg icons with changed class name 

let allIconBlocks = document.getElementsByClassName('active-block');
function stopAnimationSvg (index) {
    let iconsSvg = allIconBlocks[index].getElementsByClassName('wobble-svg');
    for (let i=0; i < iconsSvg.length; i++) {
        iconsSvg[i].classList.add('wobble-svg-stopAnimation');
    }    
}

// animation to change color for svg-line

function changeColorSvgLine (index) {
    let svgLine = allIconBlocks[index].getElementsByClassName('svg-line');
    for (let i=0; i < svgLine.length; i++) {
       svgLine[i].classList.toggle('change-color-animation');      
    }
}


// to start load main blocks by rotation without event click  

let animationInterval = null; 
document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        animationInterval = setInterval(startLoadBlocks, 4000); 
    }
};
  
let сounter = 0;
let startLoadBlocks = function(){
    if(сounter < allIconBlocks.length) {
        let blockId = allIconBlocks[сounter].id;
        if (blockId == 'work-experience-icon') {
            initLineAndBlock('work-experience-icon', 'experience-line', 'work-experience-item');
            stopAnimationSvg(blockId);
            changeColorSvgLine(blockId);
            
        }
        if (blockId == 'passions-icon') {
            initLineAndBlock('passions-icon', 'passions-line', 'passions-item');
            stopAnimationSvg(blockId);
            changeColorSvgLine(blockId);
        }
        if (blockId == 'sertificates-icon') {
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'sertificates-item');
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'languages-item');
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'portfolio-item');
            stopAnimationSvg(blockId);
            changeColorSvgLine(blockId);
        }
        if (blockId == 'soft-skills-icon') {
            initLineAndBlock('soft-skills-icon', 'soft-skills-line', 'soft-skills-item');
            stopAnimationSvg(blockId);
            changeColorSvgLine(blockId);
            drawSkillCircle('canvas-html', 'HTML', 75, '36px');
            drawSkillCircle('canvas-css', 'CSS', 70, '36px');
            drawSkillCircle('canvas-js', 'JS', 50, '36px');
            drawSkillCircle('canvas-sass', 'SASS', 60, '36px');
            drawSkillCircle('canvas-bp', 'Bootstrap', 60, '22px');
            drawSkillCircle('canvas-animate', 'Canvas', 50, '26px');
            drawSkillCircle('canvas-ps', 'PS', 60, '36px');
        }
        if (blockId == 'contacts-icon') {
            initLineAndBlock('contacts-icon', 'contacts-line', 'contacts-item');
            stopAnimationSvg(blockId);
            changeColorSvgLine(blockId);
        }
        сounter++;
    }
};


//to start load main blocks on click event

for (let i=0; i < allIconBlocks.length; i++) {
    allIconBlocks[i].addEventListener('click', function(){
        stopAnimationSvg(i);
        if (this.id == 'work-experience-icon') {
            initLineAndBlock('work-experience-icon', 'experience-line', 'work-experience-item');
        }
        if (this.id == 'passions-icon') {
            initLineAndBlock('passions-icon', 'passions-line', 'passions-item');
        }
        if (this.id == 'sertificates-icon') {
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'sertificates-item');
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'languages-item');
            initLineAndBlock('sertificates-icon', 'sertificates-line', 'portfolio-item');
        }
        if (this.id == 'contacts-icon') {
            initLineAndBlock('contacts-icon', 'contacts-line', 'contacts-item');
        }
        if (this.id == 'soft-skills-icon') {
            initLineAndBlock('soft-skills-icon', 'soft-skills-line', 'soft-skills-item');
            drawSkillCircle('canvas-html', 'HTML', 75, '36px');
            drawSkillCircle('canvas-css', 'CSS', 70, '36px');
            drawSkillCircle('canvas-js', 'JS', 50, '36px');
            drawSkillCircle('canvas-sass', 'SASS', 60, '36px');
            drawSkillCircle('canvas-bp', 'Bootstrap', 60, '22px');
            drawSkillCircle('canvas-animate', 'Canvas', 50, '26px');
            drawSkillCircle('canvas-ps', 'PS', 60, '36px');
        }
        else {
            
            clearInterval(animationInterval);
        }
        console.log(this.id);
    });
    
}


