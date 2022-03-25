// BUSINESS LOGIC 

// UI LOGIC 
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    const website = $("input:radio[name=website]:checked").val();
    const view = $("input:radio[name=view]:checked").val();
    const common = $("input:radio[name=common]:checked").val();
    const most = $("input:radio[name=most]:checked").val();
    const worst = $("input:radio[name=worst]:checked").val();
    let result = 0

    if (website === "function") {
      result += 1;
    } else if (website === "style") {
      result += 3;
    } else {
      result += 5;
    }
    console.log(website);
    console.log(result);



    $("#output").text(result);
  });
});