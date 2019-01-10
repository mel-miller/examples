<?php

/**
 * convert titles to friendly strings to use as ids
 */
function status_tracker_tabs_friendly_ids($string) {
  //Lower case everything
  $string = strtolower($string);
  //Make alphanumeric (removes all other characters)
  $string = preg_replace("/[^a-z0-9_\s-]/", "", $string);
  //Convert whitespaces and underscore to dash
  $string = preg_replace("/[\s_]/", "-", $string);
  return $string;
}
