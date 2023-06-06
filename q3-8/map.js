var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,0,0,0,0,0,0,0,0,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 1,
		"y": 10,
		"direction": 0,
		"life": 65534,
	},
	"hint": "かべがあったら右に進むといいよ!!",
	"state": 0,
	"goals": 1,
	"patterns": 3,
	"blocksLimit": 0,
	"links": {
		"question": "Q3-8",
		"previous": "q3-7",
		"next": "q4-1"
	},
	"robot": {
		"type": 2,
		"Basic": {
			"forward": true,
			"turn_right": true,
			"turn_left": true,
			"nop": true
		},
		"Standard": {
			"floor_color_is": false,
			"robot_direction_is": false,
			"movable_is": true
		},
		"Advanced": {
			"times_loop": false,
			"floor_color_loop": false,
			"movable_loop": true
		},
		"Expert": {
			"write_register": true,
			"read_register": true,
			"get_floor_color": true,
			"get_direction": true
		},
		"Enhanced": {
			"values_equal_is": true,
			"values_equal_loop": true,
			"infinity_loop": true,
			"is_movable_to": true
		},
		"Superior": {
			"add_register": true,
			"sub_register": true,
			"add_register_index": true,
			"sub_register_index": true,
			"set_register_index": true,
			"get_register_index": true
		},
		"Replete": {
			"read_cell_value": true,
			"read_cell_value_index": true,
			"write_cell_value": true,
			"values_compare": true,
			"expression_if": true,
			"expression_loop": true
		},
		"Master": {
		}
	},
	"chars": [
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ],
		[ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ]
	],
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="movable_loop" x="10" y="10"><value name="direction"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="turn_right"></block></next></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../img/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	var w1;
	var w2;
	if (pattern != "") {
		switch(parseInt(pattern)) {
			case 0:
				w1 = 3;
				w2 = 6;
				break;
				
			case 1:
				w1 = 4;
				w2 = 4;
				break;
				
			case 2:
				do {
					w1 = parseInt(Math.random() * 9);
				}while(w1 == Map.prototype.state);
				w2 = parseInt(Math.random() * 9) + 3;
				break;
		}
	}
	else {
		do {
			w1 = parseInt(Math.random() * 9);
		}while(w1 == Map.prototype.state);
		w2 = parseInt(Math.random() * 9) + 3;
	}
	Map.prototype.state = w1;
	
	Map.prototype.map[w1][1] = 1;
	Map.prototype.map[w1 + 1][w2] = 1;
	Map.prototype.map[w1 + 2][w2 - 1] = 5;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
