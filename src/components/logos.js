import React from "react";

export default function Logos() {
  return (
    <div className="logoscl">
      <h4>Λόγος</h4>
      <select>
        <option value="1">Μετάβαση στό Φαρμακείο ή επίσκεψη στον γιατρό</option>
        <option value="2">
          Μετάβαση σε κατάστημα προμηθειών αγαθών πρώτης ανάγκης
        </option>
        <option value="3">
          Μετάβαση στην τράπεζα, στο μέτρο που δεν είναι δυνατή η ηλεκτρονική
          συναλλαγή
        </option>
        <option value="4">
          Κίνηση για παροχή βοήθειας σε ανθρώπους που βρίσκονται σε ανάγκη
        </option>
        <option value="5">
          Μετάβαση σε τελετή (π.χ. κηδεία, γάμος, βάφτιση ή ανάλογες τελετές)
        </option>
        <option value="6">
          Σωματική άσκηση σε εξωτερικό χώρο ή κίνηση με κατοικίδιο ζώο, ατομικά
          ή ανά δύο άτομα
        </option>
      </select>
    </div>
  );
}
