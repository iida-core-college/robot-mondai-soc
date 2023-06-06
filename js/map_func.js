/**
 * 定数
 */
Map.prototype.colorValue = {
	"white": 0,
	"black": 1,
	"red": 2,
	"blue": 3,
	"green": 4,
	"yellow": 5
};
/**
 * マップをバックアップする
 */
Map.prototype.backupMap = function() {
	Map.prototype.map2 = Map.prototype.copyMap();
	Map.prototype.state2 = Map.prototype.state;
};
/**
 * マップをリストアする
 */
Map.prototype.restoreMap = function() {
	Map.prototype.map = [];
	var ptr = Map.prototype.map;
	var row = Map.prototype.map2.length;
	
	for (var i = 0; i < row; i++) {
		ptr.push(Map.prototype.map2[i].slice());
	};
	Map.prototype.state = Map.prototype.state2;
};
/**
 * 文字マップをバックアップする
 */
Map.prototype.backupChars = function() {
	Map.prototype.chars2 = Map.prototype.copyChars();
};
/**
 * 文字マップをリストアする
 */
Map.prototype.restoreChars = function() {
	Map.prototype.chars = []
	var ptr = Map.prototype.chars;
	var row = Map.prototype.chars2.length;
	
	for (var i = 0; i < row; i++) {
		ptr.push(Map.prototype.chars2[i].slice());
	}
};

/**
 * マップと対応する TD のクラスを取得する
 */
Map.prototype.getCellClass = function(v) {
	switch(v) {
		case 0:
			return 'map field';
			break;
		case 1:
			return 'map wall';
			break;
		case 2:
			return 'map red';
			break;
		case 3:
			return 'map blue';
			break;
		case 4:
			return 'map green';
			break;
		case 5:
			return 'map goal';
			break;
		default:
			return 'map wall';
			break;
	}
};

/**
 * マップの DOM を作る
 */
Map.prototype.createTableMap = function() {
	var map = document.createElement('table');
	map.setAttribute('class', 'map');
	
	var ptr = Map.prototype.map;
	var row = ptr.length;
	var col = ptr[0].length;
	
	for (var i = 0; i < row; i++) {
		var tr = document.createElement('tr');
		for (var j = 0; j < col; j++) {
			var td = document.createElement('td');
			
			td.setAttribute('class', Map.prototype.getCellClass(ptr[i][j]));
			td.setAttribute('id', 'map_'+i+'_'+j);
			
			var div = document.createElement('div');
			
			var img = document.createElement('img');
			img.setAttribute('src', Map.prototype.image_file_dir+'none.png');
			div.appendChild(img);
			
			var input = document.createElement('input');
			input.setAttribute('type', 'text');
			input.setAttribute('id', 'value_'+i+'_'+j);
			if (Map.prototype.chars[i][j] >= 0) {
				input.setAttribute('value', Map.prototype.chars[i][j]);
			}
			div.appendChild(input);
			
			td.appendChild(div);
			
			tr.appendChild(td);
		}
		map.appendChild(tr);
	}
	return map;
};

/**
 * マップのコピーを作る
 */
Map.prototype.copyMap = function() {
	var cpy = [];
	var row = Map.prototype.map.length;
	for (var i = 0; i < row; i++) {
		cpy.push(Map.prototype.map[i].slice());
	}
	return cpy;
};
/**
 * 数値マップのコピーを作る
 */
Map.prototype.copyChars = function() {
	var cpy = [];
	var row = Map.prototype.chars.length;
	for (var i = 0; i < row; i++) {
		cpy.push(Map.prototype.chars[i].slice());
	}
	return cpy;
};

/**
 * 2 つのマップの差分を調べる
 */
Map.prototype.compareMap = function(oldMap, oldChars) {
	var ptr = Map.prototype.map;
	var ptrC = Map.prototype.chars;
	var row = ptr.length;
	var col = ptr[0].length;
	
	var ret = [];
	
	for (var i = 0; i < row; i++) {
		for (var j = 0; j < col; j++)  {
			if (ptr[i][j] != oldMap[i][j]) {
				ret.push({"x": j, "y": i});
			}
			else if (ptrC[i][j] != oldChars[i][j]) {
				ret.push({"x": j, "y": i});
			}
		}
	}
	return ret;
};
