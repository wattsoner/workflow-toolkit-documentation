
            function updateLanguageProgress(progressId, percent) {
              var progressBar = document.getElementById(progressId);
              if (progressBar) {
                progressBar.style.width = percent + '%';
                var progressText = progressBar.querySelector('.progress-text');
                if (progressText) {
                  progressText.textContent = percent + '%';
                }
              }
            }
    
            updateLanguageProgress('en-progress', 100);
            updateLanguageProgress('pt-progress', 100);
            updateLanguageProgress('mx-progress', 85);
            updateLanguageProgress('nl-progress', 100);
            updateLanguageProgress('dk-progress', 95);
            updateLanguageProgress('de-progress', 45);
     