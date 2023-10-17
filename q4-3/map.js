var Map = function() {
};
Map.prototype = {
	"map":[
		[1,1,1,1,1,1,1,1,1,1,1,1],
		[1,0,0,1,0,0,0,0,1,5,0,1],
		[1,0,1,1,1,0,1,1,1,1,0,1],
		[1,0,0,1,0,0,0,0,1,0,0,1],
		[1,0,0,0,0,0,1,1,1,1,0,1],
		[1,0,1,1,1,0,0,1,1,1,0,1],
		[1,0,1,1,1,0,0,1,1,1,0,1],
		[1,0,1,1,1,1,0,0,0,0,0,1],
		[1,0,0,1,0,0,0,0,1,0,0,1],
		[1,0,1,1,1,1,0,1,1,1,0,1],
		[1,0,0,1,0,0,0,0,1,0,0,1],
		[1,1,1,1,1,1,1,1,1,1,1,1]
	],
	"start": {
		"x": 2,
		"y": 10,
		"direction": 0,
		"life": 10000,
	},
	"hint": "ゴールまで行こう",
	"state": 0,
	"goals": 1,
	"patterns": 2,
	"blocksLimit": 0,
	"links": {
		"question": "長いんです",
		"previous": "q4-2",
		"next": "q4-4"
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
			"movable_loop": false
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
Map.prototype.beforeStart = function(pattern) {

};
/**
 * ターンごとに発生する処理
 */
Map.prototype.afterMoved = function(t, pos) {
};
