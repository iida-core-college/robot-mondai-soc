var Map = function() {
};
Map.prototype = {
	"map":[
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
		[1,0,0,0,0,0,0,0,0,0,2,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 1,
		"y": 10,
		"direction": 0,
		"life": 10000,
	},
	"hint": "全てのマスを通るようにループを活用して赤マスを目指そう！",
	"state": 0,
	"goals": 1,
	"patterns": 1,
	"blocksLimit": 0,
	"links": {
		"question": "四角",
		"previous": "q4-3",
		"next": "q4-5"
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
			"movable_is": false
		},
		"Advanced": {
			"times_loop": true,
			"floor_color_loop": true,
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
	"hintBlocks": '',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../hikousen/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function() {
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	if (Map.prototype.map[pos.y][pos.x] == 0) {
		switch(pos.direction) {
			case 0:
				Map.prototype.map[pos.y + 1][pos.x] = 1;
				break;
			case 1:
				Map.prototype.map[pos.y][pos.x - 1] = 1;
				break;
			case 2:
				Map.prototype.map[pos.y - 1][pos.x] = 1;
				break;
			case 3:
				Map.prototype.map[pos.y][pos.x + 1] = 1;
				break;
		}
	}
	// afterMoved

	var count = 0;
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			if (Map.prototype.map[i][j] == 0) {
				count++;
			}
		}
	}
	if (count == 1) {
		Map.prototype.map[10][10] = 5;
	}
};
