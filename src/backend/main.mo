import Time "mo:core/Time";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Int "mo:core/Int";

actor {
  type Enquiry = {
    name : Text;
    phone : Text;
    email : Text;
    serviceType : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module Enquiry {
    public func compareByTime(enquiry1 : Enquiry, enquiry2 : Enquiry) : Order.Order {
      Int.compare(enquiry1.timestamp, enquiry2.timestamp);
    };
  };

  var enquiries : [Enquiry] = [];

  public shared ({ caller }) func submitEnquiry(name : Text, phone : Text, email : Text, serviceType : Text, message : Text) : async () {
    let newEnquiry : Enquiry = {
      name;
      phone;
      email;
      serviceType;
      message;
      timestamp = Time.now();
    };
    enquiries := enquiries.concat([newEnquiry]);
  };

  public query ({ caller }) func getAllEnquiries() : async [Enquiry] {
    enquiries.sort(Enquiry.compareByTime);
  };
};
