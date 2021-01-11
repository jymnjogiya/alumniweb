(function () {
    var words = [
      'I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.',
      'Do what you feel in your heart to be right – for you’ll be criticized anyway.',
      'Nothing is impossible, the word itself says ‘I’m possible’!',
      'Life isn’t about finding yourself. Life is about creating yourself.',
      'You never fail until you stop trying.',
      'You see things; you say, ‘Why?’ But I dream things that never were, and I say ‘Why not?',
      'Hate cannot drive out hate: only love can do that.',
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
      'The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.',
      'Pain is temporary. Quitting lasts forever.',
      'Kindness is a language which the deaf can hear and the blind can see.'
    ], i = 0;
    setInterval(function () {
      $('#changingword').fadeOut(function () {
        $(this).html(words[i = (i + 1) % words.length]).fadeIn();
      });
    }, 3000);

  })();