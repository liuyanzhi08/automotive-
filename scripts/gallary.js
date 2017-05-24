;(function () {
    $('[component-gallary]').each(function (index, rootDiv) {
        var $root = $(rootDiv);
        var $container = $root.find('.gallary-imgs');
        var $navLeft = $root.find('.gallary-nav-left');
        var $navRight = $root.find('.gallary-nav-right');
        var containerWidth = $container.width();
        var itemWidth = $container.find('li').outerWidth(true);
        var maxNum = Math.floor(containerWidth / itemWidth) || 1;
        var totalNum = $container.find('li').length;
        var totalWidth = totalNum * itemWidth;
        var perViewWidth = itemWidth * maxNum;
        $container.find('ul').css('width', totalWidth);

        var delay = 300;
        $navLeft.click(function () {
            $container.animate({'scrollLeft': '-=' + perViewWidth}, delay);
        })
        $navRight.click(function () {
            $container.animate({'scrollLeft': '+=' + perViewWidth}, delay);
        })
    })

} ());