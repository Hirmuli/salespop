var names = ["Poppy", "Bella", "Lola", "Catherine", "Michelle", "Meghan", "Daniella", "Jacob", "Jimmy", "Seth", "Shawn", "Samuel", "Otto", "Daniel", "Dan", "Jessy", "Kevin", "Susy", "Garth", "Corinna", "Mindi", "Rosalyn", "Lorilee", "Rhona", "Delaine", "Elaina", "Shelli", "Tami", "Tracy", "Alix", "Lorinda", "Kenyatta", "Yang", "Corliss", "Yadira", "Nakesha", "Daniella", "Jerica", "Leatrice", "Werner", "Louis", "Cole", "Warren", "Brad", "Joan", "Rigoberto", "Nathaniel", "Damian", "Gilberto", "Kendrick", "Thomas", "Josiah", "Wesley", "Clayton", "Fabian", "Khalid", "Aidan", "Abby", "Henry", "Sam", "Nicholas", "Michael", "Aadam"],
    works = ["Proofreading", "Editing", "Business plan", "Report", "Resume", "Essay", "Research paper", "Homework", "Dissertation", "Presentation"];
time_stamps = ["hours", "days"], setInterval(function() {
    jQuery(".custom-social-proof").stop().slideToggle("slow");
    var e = document.getElementById("salespop_name").innerHTML,
        a = names[Math.floor(Math.random() * names.length)];
    e = e.replace(e, a), document.getElementById("salespop_name").innerHTML = e;
    var n = document.getElementById("salespop_work").innerHTML,
        o = works[Math.floor(Math.random() * works.length)];
    n = n.replace(n, o), document.getElementById("salespop_work").innerHTML = n;
    var t = document.getElementById("salespop_hours").innerHTML,
        s = 1 + Math.floor(23 * Math.random());
    t = t.replace(t, s), document.getElementById("salespop_hours").innerHTML = t;
    var l = document.getElementById("salespop_time_stamp").innerHTML,
        r = time_stamps[Math.floor(Math.random() * time_stamps.length)];
  	if (s < 3 && r === time_stamps[1] && (l = l.replace(l, r)) ) {
	 	document.getElementById("salespop_time_stamp").innerHTML = l;
    }
    else {
        document.getElementById("salespop_time_stamp").innerHTML = "hours";
    }                                   
}, 8e3), jQuery(".custom-close").click(function() {
    jQuery(".custom-social-proof").stop().slideToggle("slow")
});