import { Day } from "../lib/Day";

class File {
    public size: number = 0;
    public name: string = '??';
    public parentFolder: Folder;
    constructor(name: string, parentFolder: Folder, size: number) {
        this.parentFolder = parentFolder
        this.name = name;
        this.size = size;
    }
    listContent(padding: string) {
        console.log(`${padding}- ${this.name} (file, size=${this.size})`);
    }
}

class Folder {

    public files: Map<string, File> = new Map()
    public folders: Map<string, Folder> = new Map();
    public size: number = 0;
    public name: string = '??';
    public path: string = '??';
    public parentFolder?: Folder;
    constructor(name: string, parentFolder?: Folder) {
        this.parentFolder = parentFolder
        this.name = name;
        this.path = parentFolder ? `${parentFolder.path}/${name}` : name;
    }

    cd(folderName: string): Folder {
        switch (folderName) {
            case '..': return this.parentFolder ? this.parentFolder : this;
            default: {
                if (!this.folders.has(folderName)) {
                    this.folders.set(folderName, new Folder(folderName, this))
                }
                return this.folders.get(folderName)!;
            }
        }
    }

    addFile(size: string, fileName: string) {
        console.log(`addFile size = ${size}, name = ${fileName}`)
        if (!this.files.has(fileName)) this.files.set(fileName, new File(fileName, this, parseInt(size)));
    }

    calculateSize(): number {
        this.size = 0;
        this.files.forEach(file => this.size += file.size);
        this.folders.forEach(folder => this.size += folder.calculateSize());

        return this.size;
    }

    listContent(padding: string) {
        console.log(`${padding}- ${this.name} (dir, size = ${this.size})`)
        this.folders.forEach(folder => folder.listContent(padding + '  '));
        this.files.forEach(file => file.listContent(padding + '  '));
    }

    addFoldersUnder100k() {
        const hundredk = 1000000;
        let total = 0;
        this.folders.forEach(folder => {
            if (folder.size <= hundredk) {
                console.log(`Folder ${folder.name} size (${folder.size}) <= ${hundredk}`)
                total += folder.size;
            }
            total += folder.addFoldersUnder100k();
        });

        return total;
    }

    findSmallestFolderOver(spaceToBeCleared: number, smallestSoFar: number): number {
        let smallest = smallestSoFar;
        this.folders.forEach(folder => {
            let smallestInFolder = folder.findSmallestFolderOver(spaceToBeCleared, smallest);
            if (smallestInFolder < smallest) {
                console.log(`Folder ${folder.path} size (${folder.size}) >= ${spaceToBeCleared} - smallest subFolder (${smallestInFolder}): smallest ${smallest} -> ${smallestInFolder}`)
                smallest = smallestInFolder;
            }
            else if (folder.size >= spaceToBeCleared && folder.size < smallest) {
                console.log(`Folder ${folder.path} size (${folder.size}) >= ${spaceToBeCleared} : smallest ${smallest} -> ${folder.size}`)
                smallest = folder.size;
            }
            else {
                console.log(`Folder ${folder.path} size (${folder.size}) < ${spaceToBeCleared} : smallest still ${smallest}`)
            }
        });
        return smallest;
    }

}
export class Day07 extends Day {
    part1Example(): string {
        return "95437"
    }
    part2Example(): string {
        return "24933642"
    }

    part1(entries: string[]): string {
        let root = new Folder('/');
        let folder = root;
        for (let i = 1; i < entries.length; i++) {
            let key, value1, value2;
            [key, value1, value2] = entries[i].split(' ');
            console.log(`entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
            if (key === '$') {
                if (value1 === 'cd') {
                    //console.log(`CD - entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
                    folder = folder.cd(value2);
                }
            }
            else {
                if (key !== 'dir') {
                    //console.log(`ADD - entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
                    folder.addFile(key, value1);
                }
            }
        }
        root.calculateSize();
        root.listContent('');
        let solution = root.addFoldersUnder100k() + (root.size <= 100000 ? root.size : 0);
        return `${solution}`;
    };

    part2(entries: string[]): string {
        let root = new Folder('/');
        let folder = root;
        for (let i = 1; i < entries.length; i++) {
            let key, value1, value2;
            [key, value1, value2] = entries[i].split(' ');
            console.log(`entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
            if (key === '$') {
                if (value1 === 'cd') {
                    //console.log(`CD - entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
                    folder = folder.cd(value2);
                }
            }
            else {
                if (key !== 'dir') {
                    //console.log(`ADD - entry = ${entries[i]}, key = ${key}, value1 = ${value1}, value2 = ${value2}`);
                    folder.addFile(key, value1);
                }
            }
        }
        root.calculateSize();
        root.listContent('');
        let unused = 70000000 - root.size;
        let needed = 30000000 - unused;
        console.log(`We need to free ${needed}`);
        let solution = root.findSmallestFolderOver(needed, root.size);
        return `${solution}`;
    };

    // boiler plate

    basePath(): string {
        return __dirname;
    };

}