        $('.box_container').on({
            mouseover: function(event) {
              const $target = $(event.target).closest('.box');
              if (!$target || $target.hasClass('box_isHled')) return;
          
              $target.toggleClass('box_isHled');
              const $note = $('<div></div>').text($target.data('note')).addClass('note');
              $target.append($note);
            },
          
            mouseout: function(event) {
              const $target = $(event.target).closest('.box_isHled');
              const $relatedTarget = $(event.relatedTarget).closest('.box_isHled')
          
              if ($target.closest('.box_isHled')[0] == $relatedTarget.closest('.box_isHled')[0]) return;
          
              $target.empty();
              $target.toggleClass('box_isHled');
            }
          });
          
          
          $('.collapsables').click( function(event) {
            const $target = $(event.target);
            if (!$target.hasClass('collapsables_title')) return;
          
            const $list = $target.next();
            if (!$list) return;
          
            $list.toggleClass('hidden');
          });
          

          let hash = window.location.hash;
          if (hash) selectTab(hash.slice(1));
          
          $('.tabs').click( function(event) {
            const $target = $(event.target).closest('.tab');
          
            if (!$target || $target.hasClass('tab_active')) return;
          
            selectTab($target.data('target'));
          
          })
          
          function selectTab(id) {
            $('.tab').removeClass('tab_active');
            $('.tab[data-target="' + id + '"]').addClass('tab_active');
            $('.tab-content').removeClass('tab-content_current');
            $('#' + id).addClass('tab-content_current');
        
            window.location.hash = id;
          }