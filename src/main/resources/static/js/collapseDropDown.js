// --- Pseudo Collapse (Bootstrap-like) ----------------------------
(function ($) {
  function open($target, $trigger, speed) {
    if ($target.hasClass('show')) return;
    $target.stop(true, true).slideDown(speed, function () {
      $target.addClass('show');
      if ($trigger) {
        $trigger.removeClass('collapsed').attr('aria-expanded', 'true');
      }
    });
  }

  function close($target, $trigger, speed) {
    if (!$target.hasClass('show')) return;
    $target.stop(true, true).slideUp(speed, function () {
      $target.removeClass('show');
      if ($trigger) {
        $trigger.addClass('collapsed').attr('aria-expanded', 'false');
      }
    });
  }

  function toggle($target, $trigger, speed) {
    $target.hasClass('show') ? close($target, $trigger, speed) : open($target, $trigger, speed);
  }

  // Public helpers (useful from your code)
  window.PCollapse = {
    open:  function (sel, speed=160){ open($(sel), null, speed); },
    close: function (sel, speed=160){ close($(sel), null, speed); },
    toggle:function (sel, speed=160){ toggle($(sel), null, speed); }
  };

  // Delegate clicks
  $(document).on('click', '[data-pcollapse="toggle"]', function (e) {
    e.preventDefault();
    const $trigger = $(this);
    const targetSel = $trigger.attr('data-target') || $trigger.attr('data-pc-target');
    if (!targetSel) return;

    const $target = $(targetSel);
    const speed = Number($trigger.attr('data-speed')) || 160;

    // Accordion support (optional)
    const parentSel = $trigger.attr('data-parent');
    if (parentSel) {
      $(parentSel).find('.collapse.show').not($target).each(function(){
        close($(this), $(parentSel).find('[data-target="#'+ this.id +'"]'), speed);
      });
    }

    toggle($target, $trigger, speed);
  });

})(jQuery);
