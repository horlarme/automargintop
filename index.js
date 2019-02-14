function autoMarginTop(element) {

    var element = document.querySelector(element),
        deviceHeight = window.innerHeight,
        computedHeight = parseFloat(window.getComputedStyle(element).height);

    /**
     * Checking if the element is higher than the deviceHeight
     * Then the margin-top will be 0px
     */
    if (computedHeight > deviceHeight) {
        element.style.marginTop = '0px';
    }
    /**
     * if the device width is the one higher than element
     * Then the element will have to be at the center of the
     * Device
     */
    else if (computedHeight < deviceHeight) {
        let remainingSize = deviceHeight - computedHeight,
            newMargin = remainingSize / 2;
        element.style.marginTop = newMargin + 'px';
    }
    /**
     * This will be triggered
     *
     */
    else {
        element.style.marginTop = '25%';
    }
}

export default autoMarginTop;