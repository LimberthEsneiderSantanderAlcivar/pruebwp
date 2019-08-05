//var modal = document.querySelector('#')
function traer(){
var contenido = document.querySelector('#contenido')
var x = document.getElementById("txtArtista").value
$.getJSON('https://api.deezer.com/search?q='+x, function(songs) {
contenido.innerHTML =`` 
for (var i = 0; i < 7; i++) {      
var namemodal ="exampleModalLong"+i
var namemodal2 ="exampleModalLong2"+i
    contenido.innerHTML += `
    <div class="row">
    <div class="col-lg-6">
        <br><br>
        <img src="${songs.data[i].artist.picture_big}" width="250px" class="img-fluid rounded-circle">
        <br><br>        
        <button class="col-lg-3" type="button" class="btn btn-primary" data-toggle="modal" data-target="#`+namemodal+`" >Info. de la canción</button>
                <div class="modal fade" id="`+namemodal+`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class= "container my-5 text-center" class="modal-title" id="exampleModalLongTitle"> ${songs.data[i].title}</h5>                        
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                      </div>
                      <div class="modal-body">
                                <img src="${songs.data[i].album.cover_big}" width="250px" class="img-fluid rounded-circle">
                                <br>
                                <p>Nombre de la canción: ${songs.data[i].title} </p>
                                <br>
                                <p>Id de la canción: ${songs.data[i].id} </p>
                                <br>
                                <p>Duración de la canción: ${songs.data[i].duration} </p>
                                <br>
                                <p>Id del album: ${songs.data[i].album.id} </p>
                                <br>
                                <p>Nombre del album: ${songs.data[i].album.title}</p>
                                <br>
                                <p>Tipo: ${songs.data[i].album.type}</p>
                                <br>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
        <button class="col-lg-3" type="button" class="btn btn-primary" data-toggle="modal" data-target="#`+namemodal2+`" >Más sobre ${songs.data[i].artist.name}</button>
                <div class="modal fade" id="`+namemodal2+`" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class= "container my-5 text-center" class="modal-title" id="exampleModalLongTitle"> ${songs.data[i].artist.name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                                <img src="${songs.data[i].artist.picture_big}" width="250px" class="img-fluid rounded-circle">
                                <br>
                                <p>Id del artista: ${songs.data[i].artist.id} </p>
                                <br>
                                <p>Nombre del artista: ${songs.data[i].artist.name}</p>
                                <br>
                                <p>Link a la página de Deezer del artista: <a href="${songs.data[i].artist.link}.value"></a>${songs.data[i].artist.name}</p>
                                <br>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
    </div>
    <div class="col-lg-6">
        <div class="container-audio">
        <div class="container-audio">
            <p>Canción: ${songs.data[i].title} </p>                  
        <img src="${songs.data[i].album.cover_big}" width="150px" >
        </div>
        <audio controls  loop play>
            <source src="${songs.data[i].preview}" type="audio/ogg">
            Your browser dose not Support the audio Tag
        </audio>
        </div>
    </div>    
</div>
<br><br><br><br>
`
}
});
}








