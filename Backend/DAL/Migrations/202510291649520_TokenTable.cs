namespace DAL.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class TokenTable : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Tokens",
                c => new
                    {
                        TokenId = c.Int(nullable: false, identity: true),
                        TokenKey = c.String(nullable: false, maxLength: 100),
                        CreatedAt = c.DateTime(nullable: false),
                        ExpiryDate = c.DateTime(),
                        UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TokenId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Tokens");
        }
    }
}
