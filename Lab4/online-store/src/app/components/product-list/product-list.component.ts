import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro 128Gb',
      description: 'Флагманский смартфон с титановым корпусом и мощным процессором.',
      price: 545000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h2d/hcc/86302547869726.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hcc/h01/86319878570014.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h68/h6a/86319878602782.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-dual-sim-nhtur-sinii-114695977/'
    },
    {
      id: 2,
      name: 'MacBook Air 13 M1',
      description: 'Легендарный ноутбук для работы и учебы с долгой работой батареи.',
      price: 355000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-mac-os-mgn63-100793346/'
    },
    {
      id: 3,
      name: 'AirPods Pro 2',
      description: 'Лучшие наушники с активным шумоподавлением и чистым звуком.',
      price: 108000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg',
      images: ['img1', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-belyi-113558963/'
    },
    {
      id: 4,
      name: 'Apple Watch Series 9',
      description: 'Умные часы с инновационным управлением жестами и ярким экраном.',
      price: 195000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45-mm-midnight-midnight-113398070/'
    },
    {
      id: 5,
      name: 'iPad Air 2022',
      description: 'Мощный планшет для творчества и продуктивности с чипом M1.',
      price: 285000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h23/h44/86369746616350.png?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-64-gb-seryi-104235211/'
    },
    {
      id: 6,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения в компактном дизайне.',
      price: 245000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-115162461/'
    },
    {
      id: 7,
      name: 'Яндекс Станция Миди',
      description: 'Умная колонка с мощным звуком и голосовым помощником Алисой.',
      price: 74000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/yandex-stantsija-midi-chernyi-114532298/'
    },
    {
      id: 8,
      name: 'GoPro HERO12 Black',
      description: 'Экшн-камера для идеальной съемки в любых условиях.',
      price: 185000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h45/hd9/83582110171166.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h45/hd9/83582110171166.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/gopro-hero12-black-chernyi-113110940/'
    },
    {
      id: 9,
      name: 'Xiaomi Mi Smart Kettle Pro',
      description: 'Умный чайник с контролем температуры через телефон.',
      price: 22000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p8d/62842750.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p70/p8d/62842750.png?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-smart-kettle-pro-mjvy02ym-belyi-100645936/'
    },
    {
      id: 10,
      name: 'Samsung Odyssey G5',
      description: 'Изогнутый игровой монитор для полного погружения в игру.',
      price: 135000,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hee/hf3/86794963681310.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hee/hf3/86794963681310.jpg?format=gallery-medium', 'img2', 'img3'],
      link: 'https://kaspi.kz/shop/p/samsung-odyssey-g5-lc27g55tqwixci-chernyi-100613279/'
    }
  ];
}