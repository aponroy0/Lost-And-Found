namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class New1 : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.Reports", name: "CatagoryId", newName: "CategoryId");
            RenameIndex(table: "dbo.Reports", name: "IX_CatagoryId", newName: "IX_CategoryId");
        }
        
        public override void Down()
        {
            RenameIndex(table: "dbo.Reports", name: "IX_CategoryId", newName: "IX_CatagoryId");
            RenameColumn(table: "dbo.Reports", name: "CategoryId", newName: "CatagoryId");
        }
    }
}
