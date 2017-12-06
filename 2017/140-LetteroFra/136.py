with open('200000.txt','r',encoding='utf-8') as f:
	words = f.readlines()

with open('fra4-9.js','w',encoding='utf-8') as g:
	res = []
	for word in words:
		w = word.strip()
		if '.' not in w:
			if 4 <= len(w) <= 9:
				if w.lower() == w:
					res.append(w)
	g.write(' '.join(res))
