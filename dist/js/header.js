"use strict";

$("li[data-link]").on("click", function () {
  switch ($(this).attr("data-link")) {
    case "bracket":
      $(".tournament").removeClass("matches-view");
      $(".tournament").addClass("bracket-view");
      break;
    case "matches":
      $(".tournament").removeClass("bracket-view");
      $(".tournament").addClass("matches-view");
      break;
  }
});