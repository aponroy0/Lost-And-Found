namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddNameToken : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Tokens", "Name", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Tokens", "Name");
        }
    }
}
