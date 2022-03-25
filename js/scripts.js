// BUSINESS LOGIC 

// UI LOGIC 
$(document).ready(function() {
  $("#quiz").submit(function(event) {
    event.preventDefault();
    $("#hide").hide();
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

    if (view === "interface") {
      result += 1;
    } else if (view === "design") {
      result += 3;
    } else {
      result += 5;
    }

    if (common === "javascript") {
      result += 1;
    } else if (common === "ruby") {
      result += 3;
    } else {
      result += 5;
    }

    if (most === "consistent") {
      result += 1;
    } else if (most === "creative") {
      result += 3;
    } else {
      result += 5;
    }

    if (worst === "numbers") {
      result += 1;
    } else if (worst === "volume") {
      result += 3;
    } else {
      result += 5;
    }

    if (result <= 6) {
      $("#javascript").show();
    } else if (result <= 16) {
      $("#ruby").show();
    } else {
      $("#c").show();
    }
    $("#output").show(result);
  });
});