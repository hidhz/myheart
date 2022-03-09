        var nama = prompt("Masukan Nama");
        Swal.fire({
          title: 'Halo, ' + nama + '❤️',
          text: "Halo, Mbak " + nama + " Cantik, Kamu Mau Nggak Jadi Cewek Saya",
          imageUrl: 'gb.jpg',
          imageWidth: 150,
          imageheight: 50,
          imageAlt: "Cuma Gambar Aja",
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Iyaa❤️',
          cancelButtonText: 'Nggak!'
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'I Love You Mbak ' + nama + '❤️',
              'Terima kasih Mbak ' + nama + ' Cantik,Sudah menerima saya',
              'success',
            )
          }
        });


        var typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 45,
                loop: false
            }
        );
    $(document).ready ( function () {
        $("#info").click(function () {
           Swal.fire(
               "I'M Hidhz",
               "<p>Dibuat Menggunakan <strong><span class='text-warning'>Javascript</span> & <span class='text-danger'>Php</span></strong>,Eitss Walaupun dibuat Menggunakan <span class='text-danger'><strong>Php</strong></span> Tapi <i><strong>Aku serius</sttong> Ngga <span class='text-primary'>Php</span> in kamu kok.</i></p>"
           )
        });
        $("#dont").click(function(){
            Swal.fire(
                    "I ❤️ U Mbak " + nama,
                    '"I believe in fate that you will be my soul mate."'
                ).then((result) => {
                    if(result.isConfirmed){
                        location.href = "https://api.whatsapp.com/send?phone=6281216935644&text=I%20Love%20u%20Too";
                    }
                })
        });
    });