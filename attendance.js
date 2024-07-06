
$(document).on('input' ,'#total_lates,#total_early_outs' , function(e){
        e.preventDefault();
         calculateAbsents(parseInt($('#total_lates').val() || 0) ,parseInt($('#total_early_outs').val()|| 0) , e);
    })
function calculateAbsents(totalLates, totalEarlyOuts , e) {
        let absentsInput = $('#total_absents');
        let currentAbsents = parseInt(absentsInput.val()) || 0;
        let previousLates = absentsInput.data('lates') || 0;
        let previousEarlyOuts = absentsInput.data('earlyOuts') || 0;


        // Calculate the difference
        let totalPreviousLatesAndEarly = previousLates + previousEarlyOuts;
        let totalNewLatesAndEarly = totalLates + totalEarlyOuts;

        // Calculate the new absents count based on the difference
        let previousLateAbsentsCount = Math.floor(totalPreviousLatesAndEarly / 2);
        let newLateAbsentsCount = Math.floor(totalNewLatesAndEarly / 2);

        // Update the current absents by adding the difference
        currentAbsents += (newLateAbsentsCount - previousLateAbsentsCount);
        absentsInput.val(currentAbsents);
        validateDate(e);

        absentsInput.data('lates', totalLates);
        absentsInput.data('earlyOuts', totalEarlyOuts);
 }
