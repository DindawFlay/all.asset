function menukredit() {
                var element = document.getElementById("menukredit");
                element.classList.add("activemenu");
                var element = document.getElementById("menudrive");
                element.classList.remove("activemenu");
                var element = document.getElementById("menutt");
                element.classList.remove("activemenu");
                $('.tabkredit').show();
                $('.tabdrive').hide();
                $('.tabtt').hide();
            }
            function menudrive() {
                var element = document.getElementById("menukredit");
                element.classList.remove("activemenu");
                var element = document.getElementById("menudrive");
                element.classList.add("activemenu");
                var element = document.getElementById("menutt");
                element.classList.remove("activemenu");
                $('.tabkredit').hide();
                $('.tabdrive').show();
                $('.tabtt').hide();
            }
            function menutt() {
                var element = document.getElementById("menukredit");
                element.classList.remove("activemenu");
                var element = document.getElementById("menudrive");
                element.classList.remove("activemenu");
                var element = document.getElementById("menutt");
                element.classList.add("activemenu");
                $('.tabkredit').hide();
                $('.tabdrive').hide();
                $('.tabtt').show();

            }

            function kredit() {
                var namakredit = $("#namakredit").val()
                  , wakredit = $("#wakredit").val()
                  , mobilkredit = $("#mobilkredit").val()
                  , kota = $("#kota").val();
                if (!namakredit || namakredit == null || namakredit == '') {
                    $("#namakredit").css('border', '3px solid #1000ff');
                    $('.kreditgagal').show();
                } else {
                    $("#namakredit").css('border', '1px solid #ededed');
                }
                if (!wakredit || wakredit == null || wakredit == '') {
                    $("#wakredit").css('border', '3px solid #1000ff');
                    $('.kreditgagal').show();
                } else {
                    $("#wakredit").css('border', '1px solid #ededed');
                }
                if (!mobilkredit || mobilkredit == null || mobilkredit == '') {
                    $("#mobilkredit").css('border', '3px solid #1000ff');
                    $('.kreditgagal').show();
                } else {
                    $("#mobilkredit").css('border', '1px solid #ededed');
                }
                if (namakredit.length != 0 && wakredit != 0 && mobilkredit != 0) {
                    $.ajax({
                        type: 'POST',
                        url: 'https://mitsubishi-kediri.com/data-kredit.php',
                        data: $('#formkredit').serialize(),
                        dataType: 'text',
                        success: function() {
                            $('.kreditgagal').hide();
                            $('.kreditsukses').show();
                        }
                    })
                }
            }

            function drive() {
                var namadrive = $("#namadrive").val()
                  , wadrive = $("#wadrive").val()
                  , tanggaldrive = $("#tanggaldrive").val()
                  , alamatdrive = $("#alamatdrive").val();
                if (!namadrive || namadrive == null || namadrive == '') {
                    $("#namadrive").css('border', '3px solid #1000ff');
                    $('.drivegagal').show();
                } else {
                    $("#namadrive").css('border', '1px solid #ededed');
                }
                if (!wadrive || wadrive == null || wadrive == '') {
                    $("#wadrive").css('border', '3px solid #1000ff');
                    $('.drivegagal').show();
                } else {
                    $("#wadrive").css('border', '1px solid #ededed');
                }
                if (!tanggaldrive || tanggaldrive == null || tanggaldrive == '') {
                    $("#tanggaldrive").css('border', '3px solid #1000ff');
                    $('.drivegagal').show();
                } else {
                    $("#tanggaldrive").css('border', '1px solid #ededed');
                }
                if (!alamatdrive || alamatdrive == null || alamatdrive == '') {
                    $("#alamatdrive").css('border', '3px solid #1000ff');
                    $('.drivegagal').show();
                } else {
                    $("#alamatdrive").css('border', '1px solid #ededed');
                }
                if (namadrive.length != 0 && wadrive != 0 && tanggaldrive != 0 && alamatdrive != 0) {
                    $.ajax({
                        type: 'POST',
                        url: 'https://mitsubishi-kediri.com/data-drive.php',
                        data: $('#formdrive').serialize(),
                        dataType: 'text',
                        success: function() {
                            $('.drivegagal').hide();
                            $('.drivesukses').show();
                        }
                    })
                }
            }

            function tukar() {
                var namatt = $("#namatt").val()
                  , watt = $("#watt").val()
                  , mobiltt = $("#mobiltt").val()
                  , tahuntt = $("#tahuntt").val()
                  , warnatt = $("#warnatt").val()
                  , tangantt = $("#tangantt").val()
                  , tukartt = $("#tukartt").val();
                if (!namatt || namatt == null || namatt == '') {
                    $("#namatt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#namatt").css('border', '1px solid #ededed');
                }
                if (!watt || watt == null || watt == '') {
                    $("#watt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#watt").css('border', '1px solid #ededed');
                }
                if (!mobiltt || mobiltt == null || mobiltt == '') {
                    $("#mobiltt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#mobiltt").css('border', '1px solid #ededed');
                }
                if (!tahuntt || tahuntt == null || tahuntt == '') {
                    $("#tahuntt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#tahuntt").css('border', '1px solid #ededed');
                }
                if (!warnatt || warnatt == null || warnatt == '') {
                    $("#warnatt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#warnatt").css('border', '1px solid #ededed');
                }
                if (!tangantt || tangantt == null || tangantt == '') {
                    $("#tangantt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#tangantt").css('border', '1px solid #ededed');
                }
                if (!tukartt || tukartt == null || tukartt == '') {
                    $("#tukartt").css('border', '3px solid #1000ff');
                    $('.ttgagal').show();
                } else {
                    $("#tukartt").css('border', '1px solid #ededed');
                }
                if (namatt.length != 0 && watt != 0 && mobiltt != 0 && tahuntt != 0 && warnatt.length != 0 && tangantt != 0 && tukartt != 0) {
                    $.ajax({
                        type: 'POST',
                        url: 'https://mitsubishi-kediri.com/data-tukarindex.php',
                        data: $('#formtt').serialize(),
                        dataType: 'text',
                        success: function() {
                            $('.ttgagal').hide();
                            $('.ttsukses').show();
                        }
                    })
                }
            }
