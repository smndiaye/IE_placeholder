jQuery(function($) {

    var input = '.input-wrapper>textarea';

    function update(force) {
        var $input = $(this),
            $parent = $input.parent('.input-wrapper');
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

    $(input).live('focus', focus).live('blur', blur).live('keyup', update).live('click', update).live('keydown', keydown);

    $(input).prepareInput();

});
