procedure InitializeComponent;
    begin
        self.textBox1 := new System.Windows.Forms.TextBox();
        self.openFileDialog1 := new System.Windows.Forms.OpenFileDialog();
        self.saveFileDialog1 := new System.Windows.Forms.SaveFileDialog();
        self.colorDialog1 := new System.Windows.Forms.ColorDialog();
        self.folderBrowserDialog1 := new System.Windows.Forms.FolderBrowserDialog();
        self.fontDialog1 := new System.Windows.Forms.FontDialog();
        self.menuStrip1 := new System.Windows.Forms.MenuStrip();
        self.toolStripMenuItem1 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem3 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem4 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem5 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem6 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem2 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem7 := new System.Windows.Forms.ToolStripMenuItem();
        self.toolStripMenuItem8 := new System.Windows.Forms.ToolStripMenuItem();
        self.menuStrip1.SuspendLayout();
        self.SuspendLayout();
        // 
        // textBox1
        // 
        self.textBox1.Dock := System.Windows.Forms.DockStyle.Fill;
        self.textBox1.Location := new System.Drawing.Point(0, 25);
        self.textBox1.Multiline := true;
        self.textBox1.Name := 'textBox1';
        self.textBox1.Size := new System.Drawing.Size(737, 448);
        self.textBox1.TabIndex := 0;
        // 
        // openFileDialog1
        // 
        self.openFileDialog1.FileName := 'openFileDialog1';
        // 
        // menuStrip1
        // 
        self.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[4](self.toolStripMenuItem1, self.toolStripMenuItem2, self.toolStripMenuItem7, self.toolStripMenuItem8));
        self.menuStrip1.Location := new System.Drawing.Point(0, 0);
        self.menuStrip1.Name := 'menuStrip1';
        self.menuStrip1.Size := new System.Drawing.Size(737, 25);
        self.menuStrip1.TabIndex := 1;
        self.menuStrip1.Text := 'menuStrip1';
        // 
        // toolStripMenuItem1
        // 
        self.toolStripMenuItem1.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[4](self.toolStripMenuItem3, self.toolStripMenuItem4, self.toolStripMenuItem5, self.toolStripMenuItem6));
        self.toolStripMenuItem1.Font := new System.Drawing.Font('Showcard Gothic', 9.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (System.Byte(0)));
        self.toolStripMenuItem1.ForeColor := System.Drawing.Color.Coral;
        self.toolStripMenuItem1.Name := 'toolStripMenuItem1';
        self.toolStripMenuItem1.Size := new System.Drawing.Size(55, 21);
        self.toolStripMenuItem1.Text := 'Файл';
        // 
        // toolStripMenuItem3
        // 
        self.toolStripMenuItem3.ForeColor := System.Drawing.Color.SaddleBrown;
        self.toolStripMenuItem3.ImageTransparentColor := System.Drawing.Color.Yellow;
        self.toolStripMenuItem3.Name := 'toolStripMenuItem3';
        self.toolStripMenuItem3.Size := new System.Drawing.Size(152, 22);
        self.toolStripMenuItem3.Text := 'Новый';
        self.toolStripMenuItem3.Click += toolStripMenuItem3_Click;
        // 
        // toolStripMenuItem4
        // 
        self.toolStripMenuItem4.ForeColor := System.Drawing.Color.SaddleBrown;
        self.toolStripMenuItem4.ImageTransparentColor := System.Drawing.Color.Yellow;
        self.toolStripMenuItem4.Name := 'toolStripMenuItem4';
        self.toolStripMenuItem4.Size := new System.Drawing.Size(152, 22);
        self.toolStripMenuItem4.Text := 'Открыть';
        self.toolStripMenuItem4.Click += toolStripMenuItem4_Click;
        // 
        // toolStripMenuItem5
        // 
        self.toolStripMenuItem5.ForeColor := System.Drawing.Color.SaddleBrown;
        self.toolStripMenuItem5.ImageTransparentColor := System.Drawing.Color.Yellow;
        self.toolStripMenuItem5.Name := 'toolStripMenuItem5';
        self.toolStripMenuItem5.Size := new System.Drawing.Size(152, 22);
        self.toolStripMenuItem5.Text := 'Сохранить';
        self.toolStripMenuItem5.Click += toolStripMenuItem5_Click;
        // 
        // toolStripMenuItem6
        // 
        self.toolStripMenuItem6.ForeColor := System.Drawing.Color.SaddleBrown;
        self.toolStripMenuItem6.ImageTransparentColor := System.Drawing.Color.Yellow;
        self.toolStripMenuItem6.Name := 'toolStripMenuItem6';
        self.toolStripMenuItem6.Size := new System.Drawing.Size(152, 22);
        self.toolStripMenuItem6.Text := 'Выход';
        self.toolStripMenuItem6.Click += toolStripMenuItem6_Click;
        // 
        // toolStripMenuItem2
        // 
        self.toolStripMenuItem2.Font := new System.Drawing.Font('Showcard Gothic', 9.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (System.Byte(0)));
        self.toolStripMenuItem2.ForeColor := System.Drawing.Color.Coral;
        self.toolStripMenuItem2.Name := 'toolStripMenuItem2';
        self.toolStripMenuItem2.Size := new System.Drawing.Size(69, 21);
        self.toolStripMenuItem2.Text := 'Правка';
        // 
        // toolStripMenuItem7
        // 
        self.toolStripMenuItem7.Font := new System.Drawing.Font('Showcard Gothic', 9.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (System.Byte(0)));
        self.toolStripMenuItem7.ForeColor := System.Drawing.Color.Coral;
        self.toolStripMenuItem7.Name := 'toolStripMenuItem7';
        self.toolStripMenuItem7.Size := new System.Drawing.Size(45, 21);
        self.toolStripMenuItem7.Text := 'Вид';
        // 
        // toolStripMenuItem8
        // 
        self.toolStripMenuItem8.Font := new System.Drawing.Font('Showcard Gothic', 9.75, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, (System.Byte(0)));
        self.toolStripMenuItem8.ForeColor := System.Drawing.Color.Coral;
        self.toolStripMenuItem8.Name := 'toolStripMenuItem8';
        self.toolStripMenuItem8.Size := new System.Drawing.Size(68, 21);
        self.toolStripMenuItem8.Text := 'Проект';
        // 
        // Form1
        // 
        self.ClientSize := new System.Drawing.Size(737, 473);
        self.Controls.Add(self.textBox1);
        self.Controls.Add(self.menuStrip1);
        self.MainMenuStrip := self.menuStrip1;
        self.Name := 'Form1';
        self.Text := 'Блокнот';
        self.Load += Form1_Load;
        self.menuStrip1.ResumeLayout(false);
        self.menuStrip1.PerformLayout();
        self.ResumeLayout(false);
        self.PerformLayout();
    end;
