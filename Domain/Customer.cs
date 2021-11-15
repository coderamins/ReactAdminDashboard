using System;

namespace Domain
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public string FirstName { get; set; } 
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Mobile { get; set; }
        public string BirthDate { get; set; }
    }    
}