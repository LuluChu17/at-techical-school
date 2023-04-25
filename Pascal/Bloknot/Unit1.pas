Unit Unit1;

interface

uses System, System.Drawing, System.Windows.Forms;

type
  Form1 = class(Form)
    procedure Form1_Load(sender: Object; e: EventArgs);
    procedure toolStripMenuItem3_Click(sender: Object; e: EventArgs);
    procedure toolStripMenuItem4_Click(sender: Object; e: EventArgs);
    procedure toolStripMenuItem5_Click(sender: Object; e: EventArgs);
    procedure toolStripMenuItem6_Click(sender: Object; e: EventArgs);
  {$region FormDesigner}
  internal
    {$resource Unit1.Form1.resources}
    openFileDialog1: OpenFileDialog;
    saveFileDialog1: SaveFileDialog;
    colorDialog1: ColorDialog;
    folderBrowserDialog1: FolderBrowserDialog;
    fontDialog1: FontDialog;
    menuStrip1: MenuStrip;
    toolStripMenuItem1: ToolStripMenuItem;
    toolStripMenuItem3: ToolStripMenuItem;
    toolStripMenuItem4: ToolStripMenuItem;
    toolStripMenuItem5: ToolStripMenuItem;
    toolStripMenuItem6: ToolStripMenuItem;
    toolStripMenuItem2: ToolStripMenuItem;
    toolStripMenuItem7: ToolStripMenuItem;
    toolStripMenuItem8: ToolStripMenuItem;
    textBox1: TextBox;
    {$include Unit1.Form1.inc}
  {$endregion FormDesigner}
  public
    constructor;
    begin
      InitializeComponent;
    end;
  end;

implementation

procedure Form1.Form1_Load(sender: Object; e: EventArgs);
begin
  
end;

procedure Form1.toolStripMenuItem3_Click(sender: Object; e: EventArgs);
begin
  textBox1.Clear;
end;

procedure Form1.toolStripMenuItem4_Click(sender: Object; e: EventArgs);
begin
  var new:='Новый проект';
  var open:string;
  openFileDialog1.ShowDialog();
  open:=openFileDialog1.FileName;
  new:='text '+open;
  TextBox1.Lines:=ReadAllLines(open);
end;

procedure Form1.toolStripMenuItem5_Click(sender: Object; e: EventArgs);
begin
  var save:string;
  saveFileDialog1.ShowDialog();
  save:=saveFileDialog1.FileName;
  WriteAllLines(save,textBox1.Lines);
  
end;
  procedure Form1.toolStripMenuItem6_Click(sender: Object; e: EventArgs);
begin
end;

end.


