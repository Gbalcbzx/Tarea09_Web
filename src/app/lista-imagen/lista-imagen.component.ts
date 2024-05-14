import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-imagen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-imagen.component.html',
  styleUrl: './lista-imagen.component.css'
})
export class ListaImagenComponent {
  images = [
    {
      title: 'King Ghidorah',
      description: 'King Ghidorah es de hecho un titán alfa en el universo cinematográfico de Godzilla. Tras ser despertado por los humanos, el llamado Monster Zero buscó comenzar su reinado dejando escapar una llamada alfa.',
      url: 'https://sm.ign.com/t/ign_latam/screenshot/default/3d9f65d229ab19eb76c28644e0a921ad_67fq.960.jpg'
    },
    {
      title: 'Godzilla',
      description: 'Godzilla Legendario (レジェンダリーゴジ, "RejendarīGoji") o simplemente Godzilla, es el Kaiju protagonista de las mas recientes y modernas películas producidas por Warner Bros',
      url: 'https://www.latercera.com/resizer/5jZzk4l74Ts91ETN8bVr8U_JpBA=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/OYHQHMGMHZA25PRC6GMCQLFCCY.jpg'
    },
    {
      title: 'King Kong',
      description: 'King Kong es un alfa por derecho propio, pese a que no es tan poderoso como Godzilla, pero es uno de los Titanes alfa de MonsterVerse.',
      url: 'https://sm.ign.com/t/ign_latam/screenshot/default/1366-2000_a1jk.960.jpg'
    },
    {
      title: 'Tiamat',
      description: 'Tiamat, una criatura que comparte su nombre con un ser de la mitología babilónica. ',
      url: 'https://sm.ign.com/t/ign_latam/screenshot/default/dope-pope-tiamat-r3-1_64s8.960.jpg'
    },
    {
      title: 'Rodan',
      description: 'Rodan es un titán que apareció por primera vez en la película de 1956 "Rodan" de Toho. ',
      url: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/08/godzilla-vs-kong-rodan-not-appear-monsterverse-future.jpg'
    },
    {
      title: 'Mothra',
      description: 'Mothra es un Titán que aparece en la película de 2019, Godzilla: Rey de los Monstruos, y es considerada como una "reina" para otros Titanes y protectora de la Tierra.',
      url: 'https://qph.cf2.quoracdn.net/main-qimg-b1a6871d1acc5fd6a34033ea23d2a78e-lq'
    }
  ];

}
