<script>
	document.addEventListener("DOMContentLoaded", function() {
	  var accordionHeaders = document.getElementsByClassName("accordion-header");
	
	  // Add click event listener to each accordion header
	  for (var i = 0; i < accordionHeaders.length; i++) {
	    accordionHeaders[i].addEventListener("click", function() {
	      var accordionContent = this.nextElementSibling;
	      var isActive = accordionContent.style.display === "block";
	
	      // Close all accordion content
	      var allAccordionContent = document.getElementsByClassName("accordion-content");
	      for (var j = 0; j < allAccordionContent.length; j++) {
	        allAccordionContent[j].style.display = "none";
	      }
	
	      // Remove "active" class from all accordion headers
	      var allAccordionHeaders = document.getElementsByClassName("accordion-header");
	      for (var k = 0; k < allAccordionHeaders.length; k++) {
	        allAccordionHeaders[k].classList.remove("active");
	      }
	
	      // Toggle the display of the clicked accordion content
	      accordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked accordion header
	      this.classList.toggle("active");
	    });
	  }
	
	  var subAccordionHeaders = document.getElementsByClassName("sub-accordion-header");
	
	  // Add click event listener to each sub-accordion header
	  for (var i = 0; i < subAccordionHeaders.length; i++) {
	    subAccordionHeaders[i].addEventListener("click", function() {
	      var subAccordionContent = this.nextElementSibling;
	      var isActive = subAccordionContent.style.display === "block";
	
	      // Toggle the display of the clicked sub-accordion content
	      subAccordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked sub-accordion header
	      this.classList.toggle("active");
	    });
	  }
	});
	</script>
	
	<script>
	document.addEventListener("DOMContentLoaded", function() {
	  var accordionHeaders = document.getElementsByClassName("accordion-header-b");
	
	  // Add click event listener to each accordion header
	  for (var i = 0; i < accordionHeaders.length; i++) {
	    accordionHeaders[i].addEventListener("click", function() {
	      var accordionContent = this.nextElementSibling;
	      var isActive = accordionContent.style.display === "block";
	
	      // Close all accordion content
	      var allAccordionContent = document.getElementsByClassName("accordion-content");
	      for (var j = 0; j < allAccordionContent.length; j++) {
	        allAccordionContent[j].style.display = "none";
	      }
	
	      // Remove "active" class from all accordion headers
	      var allAccordionHeaders = document.getElementsByClassName("accordion-header");
	      for (var k = 0; k < allAccordionHeaders.length; k++) {
	        allAccordionHeaders[k].classList.remove("active");
	      }
	
	      // Toggle the display of the clicked accordion content
	      accordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked accordion header
	      this.classList.toggle("active");
	    });
	  }
	
	  var subAccordionHeaders = document.getElementsByClassName("sub-accordion-header");
	
	  // Add click event listener to each sub-accordion header
	  for (var i = 0; i < subAccordionHeaders.length; i++) {
	    subAccordionHeaders[i].addEventListener("click", function() {
	      var subAccordionContent = this.nextElementSibling;
	      var isActive = subAccordionContent.style.display === "block";
	
	      // Toggle the display of the clicked sub-accordion content
	      subAccordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked sub-accordion header
	      this.classList.toggle("active");
	    });
	  }
	});
	</script>
	
	<script>
	document.addEventListener("DOMContentLoaded", function() {
	  var accordionHeaders = document.getElementsByClassName("accordion-header-c");
	
	  // Add click event listener to each accordion header
	  for (var i = 0; i < accordionHeaders.length; i++) {
	    accordionHeaders[i].addEventListener("click", function() {
	      var accordionContent = this.nextElementSibling;
	      var isActive = accordionContent.style.display === "block";
	
	      // Close all accordion content
	      var allAccordionContent = document.getElementsByClassName("accordion-content");
	      for (var j = 0; j < allAccordionContent.length; j++) {
	        allAccordionContent[j].style.display = "none";
	      }
	
	      // Remove "active" class from all accordion headers
	      var allAccordionHeaders = document.getElementsByClassName("accordion-header");
	      for (var k = 0; k < allAccordionHeaders.length; k++) {
	        allAccordionHeaders[k].classList.remove("active");
	      }
	
	      // Toggle the display of the clicked accordion content
	      accordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked accordion header
	      this.classList.toggle("active");
	    });
	  }
	
	  var subAccordionHeaders = document.getElementsByClassName("sub-accordion-header");
	
	  // Add click event listener to each sub-accordion header
	  for (var i = 0; i < subAccordionHeaders.length; i++) {
	    subAccordionHeaders[i].addEventListener("click", function() {
	      var subAccordionContent = this.nextElementSibling;
	      var isActive = subAccordionContent.style.display === "block";
	
	      // Toggle the display of the clicked sub-accordion content
	      subAccordionContent.style.display = isActive ? "none" : "block";
	
	      // Add "active" class to the clicked sub-accordion header
	      this.classList.toggle("active");
	    });
	  }
	});
	
	// Get the input field and dropdown container
	var input = document.getElementById("myInput");
	var dropdown = document.getElementById("myDropdown");
	
	// Add an event listener to detect user input
	input.addEventListener("input", function() {
	  // Clear previous dropdown items
	  dropdown.innerHTML = "";
	
	  // Get the user input
	  var inputValue = input.value.toLowerCase();
	
	  // Define the dropdown items and their corresponding URLs
	  var items = [
	    { name: 'Admin PPID (VPN)', url: 'https://ppid.bps.go.id/dashboard' },
	    { name: 'Admin Romantik (VPN)', url: 'https://romantik.bps.go.id/webadmin' },
	    { name: 'ARC BRS', url: 'https://jabar.bps.go.id/publication/arc#arcTab2.html' },
	    { name: 'ARC Publikasi', url: 'https://jabar.bps.go.id/publication/arc#arcTab1.html' },
	    { name: 'Backend Web (VPN)', url: 'https://jabar.bps.go.id/backend' },
	    { name: 'Backoffice BPS (VPN)', url: 'https://backoffice.bps.go.id/' },
	    { name: 'Berita Resmi Statistik', url: 'https://jabar.bps.go.id/pressrelease.html' },
	    { name: 'BPS Pusat', url: 'www.bps.go.id' },
	    { name: 'Cinta Statistik - Buku Saku', url: 'https://bps3273.top/cantik' },
	    { name: 'Community BPS (VPN)', url: 'https://community.bps.go.id/' },
	    { name: 'Data Spasial BPS (VPN)', url: 'https://dataspasial.bps.go.id/' },
	    { name: 'Drive BPS', url: 'https://drive.bps.go.id/' },
	    { name: 'E Monev Bappenas', url: 'https://e-monev.bappenas.go.id/fe/jumper' },
	    { name: 'Ekspor Impor', url: 'https://jabar.bps.go.id/subject/8/ekspor-impor.html#subjekViewTab3' },
	    { name: 'E-Learning BPS', url: 'https://elearning.bps.go.id/login/login_new.php' },
	    { name: 'Email BPS', url: 'https://mail.bps.go.id/' },
	    { name: 'Entri Metadata', url: 'https://indah.bps.go.id/' },
	    { name: 'Entri Online BPS (VPN)', url: 'https://pengolahan.bps.go.id/' },
	    { name: 'Entri SBH 2022', url: 'https://webapps.bps.go.id/olah/sbh2022/login' },
	    { name: 'EPSS / Simbatik', url: 'https://webapps.bps.go.id/simbatik/' },
	    { name: 'ESR MenPAN / e-SAKIP REVIU', url: 'https://esr.menpan.go.id/' },
	    { name: 'Facebook', url: 'https://facebook.com/bpsprovjabar?__tn__=C-R' },
	    { name: 'FASIH Management (VPN)', url: 'https://fasih-sm.bps.go.id' },
	    { name: 'Galeri Infografis', url: 'https://jabar.bps.go.id/galery.html' },
	    { name: 'Gender', url: 'https://jabar.bps.go.id/subject/40/gender.html#subjekViewTab3' },
	    { name: 'Git BPS (VPN)', url: 'https://git.bps.go.id' },
	    { name: 'Github', url: 'https://https://github.com/' },
	    { name: 'Google', url: 'https://www.google.com/' },
	    { name: 'Hortikultura', url: 'https://jabar.bps.go.id/subject/157/tanaman-hortikultura.html#subjekViewTab3' },
	    { name: 'Indikator Strategis', url: 'https://jabar.bps.go.id/QuickMap?id=0000000000' },
	    { name: 'Inflasi', url: 'https://jabar.bps.go.id/subject/3/inflasi.html#subjekViewTab3' },
	    { name: 'Input Output', url: 'https://jabar.bps.go.id/subject/105/input-output.html#subjekViewTab3' },
	    { name: 'Instagram', url: 'https://www.instagram.com/bpsjabar/?hl=en' },
	    { name: 'IPM', url: 'https://jabar.bps.go.id/subject/26/indeks-pembangunan-manusia.html#subjekViewTab3' },
	    { name: 'Istilah Statistik', url: 'https://jabar.bps.go.id/istilah.html' },
	    { name: 'Jabar Open Data', url: 'https://opendata.jabarprov.go.id/id' },
	    { name: 'Kamus Fungsional Statistisi', url: 'https://bps3273.top/kamfus32' },
	    { name: 'Katalog Datamikro', url: 'https://repository.bps.go.id/mikrodata/index.php/home' },
	    { name: 'KBLI/ KBJI/ KBKI', url: 'https://www.bps.go.id/klasifikasi' },
	    { name: 'Kegiatan Sensus', url: 'https://sensus.bps.go.id/' },
	    { name: 'Kehutanan', url: 'https://jabar.bps.go.id/subject/164/kehutanan.html#subjekViewTab3' },
	    { name: 'Kelurahan Cantik - Derwati', url: 'https://www.derwatirumasa.com/' },
	    { name: 'Kemenkeu Learning Center', url: 'https://klc2.kemenkeu.go.id/' },
	    { name: 'Kemiskinan', url: 'https://jabar.bps.go.id/subject/23/kemiskinan.html#subjekViewTab3' },
	    { name: 'Kependudukan', url: 'https://jabar.bps.go.id/subject/12/kependudukan.html#subjekViewTab3' },
	    { name: 'KipApp', url: 'https://webapps.bps.go.id/kipapp/' },
	    { name: 'Laci BPS', url: 'https://laci.bps.go.id/' },
	    { name: 'Live Chat Website', url: 'https://webapps.bps.go.id/chat/index.php/site_admin/user/login'},
	    { name: 'Manajemen Mitra BPS (VPN)', url: 'https://manajemen-mitra.bps.go.id/' },
	    { name: 'MFD', url: 'https://frs.bps.go.id/area/login' },
	    { name: 'Monitoring IPDS3200', url: 'https://s.id/asik32' },
	    { name: 'Monitoring Pengolahan BPS', url: 'https://webmonitoring.bps.go.id/' },
	    { name: 'Muda Berdasi', url: 'https://32net.id/jabar/tamuvirtual/index' },
	    { name: 'NTP', url: 'https://jabar.bps.go.id/subject/22/nilai-tukar-petani.html#subjekViewTab3' },
	    { name: 'OM-SPAN', url: 'https://spanint.kemenkeu.go.id/spanint/latest/app/' },
	    { name: 'Pariwisata', url: 'https://jabar.bps.go.id/subject/16/pariwisata.html#subjekViewTab3' },
	    { name: 'PDRB Kabupaten/Kota', url: 'https://jabar.bps.go.id/subject/155/pdrb-menurut-kabupaten-kota.html#subjekViewTab3' },
	    { name: 'PDRB Lapangan Usaha', url: 'https://jabar.bps.go.id/subject/52/pdrb-menurut-lapangan-usaha.html#subjekViewTab3' },
	    { name: 'PDRB Pengeluaran', url: 'https://jabar.bps.go.id/subject/166/pdrb-menurut-pengeluaran.html#subjekViewTab3' },
	    { name: 'Pengangguran', url: 'https://jabar.bps.go.id/subject/6/tenaga-kerja.html#subjekViewTab3' },
	    { name: 'Perikanan', url: 'https://jabar.bps.go.id/subject/160/perikanan.html#subjekViewTab3' },
	    { name: 'Perkebunan', url: 'https://jabar.bps.go.id/subject/163/perkebunan.html#subjekViewTab3' },
	    { name: 'Perpustakaan/ Digital Library', url: 'https://perpustakaan.bps.go.id/' },
	    { name: 'Peternakan', url: 'https://jabar.bps.go.id/subject/158/peternakan.html#subjekViewTab3' },
	    { name: 'Portal Publikasi BPS (VPN)', url: 'https://portalpublikasi.bps.go.id/' },
	    { name: 'Potensi Desa', url: 'https://jabar.bps.go.id/subject/154/potensi-desa.html#subjekViewTab3' },
	    { name: 'PPID BPS', url: 'https://ppid.bps.go.id/' },
	    { name: 'PPK / Pejabat Pembuat Komitmen', url: 'https://bps3273.top/ppk3200' },
	    { name: 'PST / Pelayanan Statistik Terpadu', url: 'https://pst.bps.go.id/' },
	    { name: 'Reformasi Birokrasi BPS', url: 'http://rb.bps.go.id/' },
	    { name: 'Romantik', url: 'https://romantik.bps.go.id/' },
	    { name: 'SAKIP - Tentang', url: 'https://bps3273.top/sakip' },
	    { name: 'Shortlink BPS', url: 'https://s.bps.go.id/' },
	    { name: 'SiImut BPS', url: 'https://sdm.bps.go.id/siimut/web/site/login' },
	    { name: 'SiJaFung BPS', url: 'https://jafung.bps.go.id/' },
	    { name: 'SiLastik', url: 'https://silastik.bps.go.id/v3/index.php/site/login/' },
	    { name: 'SIMDASI (VPN)', url: 'https://simdasi.bps.go.id/' },
	    { name: 'SIMonev BPS', url: 'https://monev.bps.go.id/monevnew/index.php?r=site/login' },
	    { name: 'Simpeg BPS (VPN)', url: 'https://simpeg.bps.go.id/' },
	    { name: 'SiPeCut BPS (VPN)', url: 'https://sipecut.bps.go.id/app/index.php/pegawai' },
	    { name: 'SIPPN MenPAN', url: 'https://sippn.menpan.go.id/' },
	    { name: 'SiRuSa (VPN)', url: 'https://sirusa.bps.go.id/' },
	    { name: 'Sistem Statistik Hayati Indonesia', url: 'https://indah.bps.go.id/sshi2023/dashboard' },
	    { name: 'SKD 2019', url: 'https://skd.bps.go.id/skd2019/web/' },
	    { name: 'SKD 2020', url: 'https://skd.bps.go.id/skd2020/web/' },
	    { name: 'SKD 2021', url: 'https://skd.bps.go.id/SKD2021/' },
	    { name: 'SKD 2022', url: 'https://skd.bps.go.id/SKD2022/' },
	    { name: 'SKD 2023', url: 'https://skd.bps.go.id/SKD2023/' },
	    { name: 'Smart', url: 'https://anggaran.kemenkeu.go.id/in/post/aplikasi-smart' },
	    { name: 'SmartKit', url: 'https://smartkit.32net.id/' },
	    { name: 'SOBAT BPS', url: 'https://mitra.bps.go.id/' },
	    { name: 'Standar Data', url: 'https://indah.bps.go.id/standar-data-statistik-nasional' },
	    { name: 'Statistik Website', url: 'https://ppid.bps.go.id/app/statistik_website/3200/2023' },
	    { name: 'Tabel Dinamis', url: 'https://jabar.bps.go.id/site/pilihdata.html' },
	    { name: 'Tanaman Pangan', url: 'https://jabar.bps.go.id/subject/53/tanaman-pangan.html#subjekViewTab3' },
	    { name: 'Tanya AI / Kecerdasan Buatan', url: 'https://chat.openai.com/' },
	    { name: 'Telegram Desktop', url: 'https://desktop.telegram.org/' },
	    { name: 'Telegram Web', url: 'https://web.telegram.org/k/' },
	    { name: 'Warkop BPS', url: 'https://pusdiklat.bps.go.id/warkop/' },
	    { name: 'Web Dashboard (VPN)', url: 'https://webdash.bps.go.id' },
	    { name: 'WhatsApp Desktop', url: 'https://www.whatsapp.com/download' },
	    { name: 'WhatsApp Web', url: 'https://web.whatsapp.com/' },
	    { name: 'Wilkerstat BPS', url: 'https://wilkerstat.bps.go.id/public/login' },
	    { name: 'Youtube', url: 'https://www.youtube.com/@bpsjabar32/featured' }
	    ];
	
	  // Filter the dropdown items based on the input
	  for (var i = 0; i < items.length; i++) {
	    var item = items[i].name.toLowerCase();
	    if (item.startsWith(inputValue)) {
	      // Create a new dropdown item as a link
	      var option = document.createElement("a");
	      option.href = items[i].url;
	      option.textContent = items[i].name;
	
	      // Add a click event listener to open the URL in a new tab
	      option.addEventListener("click", function(event) {
	        event.preventDefault();
	        window.open(this.href, "_blank");
	      });
		  
		  
		  // Add the item to the dropdown
	      dropdown.appendChild(option);
	    }
	  }
	
	  // Display the dropdown
	  dropdown.style.display = "block";
	});
	
	// Close the dropdown when the user clicks outside of it
	document.addEventListener("click", function(event) {
	  if (!event.target.matches("#myInput")) {
	    dropdown.style.display = "none";
	  }
	});
	</script>
