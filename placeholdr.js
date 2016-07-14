/*
 * Persistent Placeholder - treats a label like a placeholder and
 * makes it persist even when you focus on an input. Huzzah!
 */
(function($) {

    var parentSelector = '.input-wrapper',
        inputSelectors = [parentSelector + '>input.text', parentSelector + '>textarea'],
        len = inputSelectors.length,
        i;

    function update(force) {
        var $input = $(this),
            $parent = $input.parent(parentSelector);
        return $parent[force === true || $input.val() ? 'addClass' : 'removeClass']('filled');
    }

    function focus() {
        update.call(this).addClass('focus');
    }

    function blur() {
        update.call(this).removeClass('focus');
    }

    function keydown(evt) {
        var c = evt.keyCode;
        ((47 < c && c < 91) || (95 < c && c < 112) || (185 < c && c < 223)) && update.call(this, true);
    }

    $.fn.prepareInput = function() {
        return this.each(update);
    };

    for (i = 0; i < len; i++) {
        $(inputSelectors[i]).live('focus', focus).live('blur', blur).live('keyup', update).live('click', update).live('keydown', keydown);
    }

    $(function() {
        for (i = 0; i < len; i++) {
            $(inputSelectors[i]).prepareInput();
        }
    });

})(jQuery);
