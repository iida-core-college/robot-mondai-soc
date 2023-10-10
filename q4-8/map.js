var Map = function() {
};
Map.prototype = {
	"map": [
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1],
		[1,1,1,0,0,2,0,0,1,1,1,1],
		[1,1,1,0,1,1,1,0,1,1,1,1],
		[1,1,0,0,1,1,1,0,1,1,1,1],
		[1,1,0,1,1,1,1,0,1,1,1,1],
		[1,0,0,0,1,1,1,0,1,1,1,1],
		[1,0,1,0,1,1,0,0,0,1,1,1],
		[1,0,1,0,1,1,0,1,0,1,1,1],
		[1,0,1,0,1,1,0,1,0,1,1,1],
		[1,1,1,1,1,1,0,1,0,1,1,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 5,
		"y": 1,
		"direction": 2,
		"life": 65534,
	},
	"hint": "一つのプログラムですべてのパターンゴールできるようにしよう‼",
	"state": 0,
	"goals": 1,
	"patterns": 4,
	"blocksLimit": 0,
	"links": {
		"question": "トーナメント",
		"previous": "q4-7",
		"next": ""
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
			"floor_color_is": true,
			"robot_direction_is": true,
			"movable_is": true
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
	"hintBlocks": '<xml xmlns="https://developers.google.com/blockly/xml"><block type="floor_color_is" x="10" y="10"><statement name="equals"><block type="forward"></block></statement></block></xml>',
	"map2": [],
	"chars2": [],
	
	"image_file_dir": '../hikousen/'
};

/**
 * コード実行前の処理
 */
Map.prototype.beforeStart = function(pattern) {
	if (pattern != "") {
		Map.prototype.state = parseInt(pattern);
	}
	if (Map.prototype.state == 0) {
		Map.prototype.map[9][1] = 5;
		Map.prototype.map[6][2] = 4;
	}
	else if(Map.prototype.state == 1){
		Map.prototype.map[9][3] = 5;
		Map.prototype.map[6][2] = 3;
	}
	else if(Map.prototype.state == 2){
		Map.prototype.map[2][5] = 4;
		Map.prototype.map[7][7] = 4;
		Map.prototype.map[10][6] = 5;
	}
	else if(Map.prototype.state == 3){
		
		Map.prototype.map[2][5] = 4;
		Map.prototype.map[7][7] = 3;
		Map.prototype.map[10][8] = 5;

	}
	Map.prototype.state = (Map.prototype.state + 1) % 2;
};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
	
};
