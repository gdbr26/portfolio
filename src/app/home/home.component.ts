import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
//     let data = [];

// function updateData() {
// 	data = [];
// 	let numItems = Math.ceil(Math.random() * 40);
// 	for(let i=0; i<numItems; i++) {
// 		data.push(Math.random() * 800);
// 	}
// }

// function update() {
// 	d3.select('svg')
// 		.selectAll('circle')
// 		.data(data)
// 		.join(
// 			function(enter) {
// 				return enter
// 					.append('circle')
// 					.attr('cy', 50)
// 					.attr('cx', function(d) {
// 						return d;
// 					})
// 					.attr('r', 40)
// 					.style('opacity', 0);
// 			},
// 			function(update) {
// 				return update;
// 			},
// 			function(exit) {
// 				return exit
// 					.transition()
// 					.duration(1000)
// 					.attr('cy', 500)
// 					.remove();
// 			}
// 		)
// 		.transition()
// 		.duration(1000)
// 		.attr('cx', function(d) {
// 			return d;
// 		})
// 		.style('opacity', 0.75);
// }

// function updateAll() {
// 	updateData();
// 	update();
// }

// updateAll();

// for (let i = 0; i < 20; i++) {
//   setInterval(()=>{
//       updateAll();
//   }, 1000);
// }
	
  }

}
